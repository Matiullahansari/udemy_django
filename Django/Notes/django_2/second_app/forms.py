from django import forms
from django.core import validators
from second_app.models import User


class User_Form(forms.ModelForm):
    class Meta():
        model = User
        fields = '__all__'