from django.urls import path
from . import views

app_name = 'registration'

urlpatterns = [
    path('submit/', views.RegistrationView.as_view())
]