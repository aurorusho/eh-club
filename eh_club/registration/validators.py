from django.core.exceptions import ValidationError

DOMAIN : str = "uanl.edu.mx"
def email_validator(value : str):
    """
    Validates if an e-mail address has a specified domain
    """
    if not value.endswith(f"@{DOMAIN}"):
        raise ValidationError(
            f'Se necesita un dominio @{DOMAIN} para el registro'
        )
