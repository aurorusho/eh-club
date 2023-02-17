from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from .validators import email_validator


class Register(models.Model):
    """
    Stores all the data from the registration from    
    """
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    group = models.IntegerField(validators=[
        MinValueValidator(100),
        MaxValueValidator(700)
    ])
    mail = models.EmailField(validators=[
        email_validator
    ])
    calendar  = models.JSONField()
    time_uploaded = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.mail