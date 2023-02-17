import json
from typing import Dict, Any
from django.http import JsonResponse 
from django.views import View
from .forms import RegisterForm


class RegistrationView(View):
    """
    Validates and saves information to the registration model
    """
    def post(self, request):
        data : Dict[str, Any] = json.loads(request.body)
        data = {
            'first_name': data.get('firstName'),
            'last_name' : data.get('lastName'),
            'group'     : data.get('group'),
            'mail'      : data.get('mail'),  
            'calendar'  : data.get('calendarData')
        }
        register = RegisterForm(data)
        is_valid = register.is_valid()
        
        if is_valid:
            register.save()

        return JsonResponse({ 'success' : is_valid })
