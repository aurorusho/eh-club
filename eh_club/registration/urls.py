from re import template
from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = 'registration'

urlpatterns = [
    path('submit', views.RegistrationView.as_view()),
]