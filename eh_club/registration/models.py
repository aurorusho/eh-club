from django.db import models
from django.core.validators import MaxValueValidator

from .validators import email_extension_validator

class Register(models.Model):
    """
    Stores all the data from the registration from    
    """
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    group = models.IntegerField(validators=[
        MaxValueValidator(700)
    ])
    mail = models.EmailField(validators=[
        email_extension_validator('uanl.edu.mx')
    ])
    monday = models.JSONField()
    tuesday = models.JSONField()
    wednesday = models.JSONField()
    thursday = models.JSONField()
    friday = models.JSONField()
    saturday = models.JSONField()
    time_uploaded = models.DateTimeField(auto_now=True)