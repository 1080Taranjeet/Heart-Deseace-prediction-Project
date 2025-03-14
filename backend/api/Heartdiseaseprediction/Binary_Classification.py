import numpy as np
import pandas as pd

'''                                            Prediction function                                                '''
def sigmoid(z):
    return 1/(1+np.exp(-z))

def predict_yi(xi,weight,bias):
    z = np.dot(xi,weight)+bias
    return sigmoid(z)

def predict(x,weight,bias):
    result = []
    for i in range(x.shape[0]):
        y_hat = predict_yi(x.iloc[i],weight,bias)
        result.append(y_hat)
    return result

'''                                                API Functions                                                   '''
def ApiPredict(xi,weight,bias,max):
    print("weight == ",weight)
    print("bias == ",bias)
    print("max == ",max)
    print("xi == ",xi)
    for i in range(len(max)-1):
        xi[i] /= max[i]
    print("xi == ",xi)
    return predict_yi(xi,weight,bias)