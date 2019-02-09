from django.urls import path
from second_app import views
from django.contrib import admin

urlpatterns = [
    path('', views.users_og, name='users_og'),
]

