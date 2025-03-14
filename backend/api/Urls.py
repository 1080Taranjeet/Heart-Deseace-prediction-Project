from django.urls import path
from .views import create_user,Main_data,contact

urlpatterns=[
    path("create-user/",create_user,name="create-user"),
    path("Data/",Main_data,name="Data"),
    path("Contact/",contact,name="contact"),
]