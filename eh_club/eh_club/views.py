from django.http import HttpResponse



PDF_NAME = 'Reglamento_club.pdf'

def pdf_view(request):
    with open(f'frontend/build/{PDF_NAME}', 'rb') as f:
        return HttpResponse(f.read(), content_type = 'Application/pdf')