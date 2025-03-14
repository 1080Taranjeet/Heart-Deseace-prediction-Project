from rest_framework.response import Response
from rest_framework.decorators import api_view
import pandas as pd
from .Heartdiseaseprediction.Binary_Classification import ApiPredict


import pymongo
from pymongo.errors import ConnectionFailure


import os
from dotenv import load_dotenv
load_dotenv()



try:
    URL=os.environ.get('MONGO_URL')

    my_client = pymongo.MongoClient(URL)

    my_client.admin.command('ping')
    print("\n\n\t\t\t\t\tConnected to MongoDB successfully!\t\t\t\t\t\n\n")

    db = my_client['MedicalData']  

   
    MainData = db['MainData']

    Weight_Bias = db["weight_bias"]

    max_value = db["max_values"]

    Contact =db["Contact"]
 


except ConnectionFailure as err:

    print("\t\t\t\t\tCould not connect to MongoDB:", err,"\t\t\t\t\t")



'''                                                 getting weight and bias values                                          '''
temp = list(Weight_Bias.find())
df = pd.DataFrame(temp)
weight = df["weight"].iloc[0]
bias = df["bias"].iloc[0]

'''                                                     getting maximum values                                               '''
temp = list(max_value.find())
df1 = pd.DataFrame(temp)
maxi = df1["max"].iloc[0]


@api_view(["POST"])
def Main_data(request):

    MainD= request.data
    lis = []
    birth = pd.to_datetime(MainD["DOB"])
    now = pd.to_datetime("today")
    lis.append(int((now-birth)/ pd.Timedelta(days=365)))
    lis.append(int(MainD["Gender"]))
    lis.append(int(MainD["Chest_pain"]))
    lis.append(int(MainD["Blood_pressure"]))
    lis.append(int(MainD["Cholesterol"]))
    lis.append(int(MainD["FPS"]))
    lis.append(int(MainD["EKG"]))
    lis.append(int(MainD["Max_HR"]))
    lis.append(int(MainD["Exercise_angina"]))
    lis.append(float(MainD["ST_depression"]))
    lis.append(int(MainD["Slope_of_ST"]))
    lis.append(int(MainD["Number_of_vessels_fluro"]))
    lis.append(int(MainD["Thallium"]))

    print("\n\n\t\t\t",lis,"\t\t\t\n\n")

    result=round(ApiPredict(lis,weight,bias,maxi)*100)

    print("\n\n\t\t\t",result,"\t\t\t\n\n")

    ans={
        "result":result,
        "data":MainD,
        "Date":pd.to_datetime("today")
    }

   
    data= MainData.insert_one(ans)

    send={
        "acknowledged":str(data.acknowledged),
        "_id":str(data.inserted_id),
        "result":result
    }
    return Response(send)

@api_view(["POST"])
def contact(request):
    data=request.data

    value=Contact.insert_one(data)

    result={
        "acknowledged":str(value.acknowledged),
        "_id":str(value.inserted_id),
    }

    return Response(result)



@api_view(["POST"])
def create_user(request):

    
    data=request.data
    print("\n\n\n",data,"\n\n\n")

    return Response(data)
