from django.core.exceptions import ValidationError


def email_extension_validator(domain : str):
    """
    Returns a function validator, checks that a string ends
    with a certain domain
    """
    def validator(value : str):
        if not value.endswith(f"@{domain}"):
            raise ValidationError(
                f'Se necesita un dominio @{domain} para el registro'
            )
    return validator