from django.views import View


class RegistrationView(View):
    """
    Validates and saves information to the registration model
    """
    def post(self, request):
        print(request.POST)