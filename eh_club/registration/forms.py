from typing import Any, List, Dict
from django import forms
from .models import Register


class CalendarChecker(forms.ModelForm):
    """
    Adds methods useful for the validation of the calendar data.
    Made to be subclassed.
    """
    WEEK_DAYS : List[str] = ['L', 'M', 'W', 'J', 'V', 'S']
    
    def check_calendar(self, calendar : Dict[str, List[str]]) -> None:
        """
        Adds the errors to the form if they exist
        """
        has_days : bool = False
        for key, value in calendar.items():
            # If the key is valid
            if key in self.WEEK_DAYS:
                is_valid : bool = self.check_day_values(value)
                if not is_valid: return
                # If there are hours
                if len(value):
                    has_days = True
            else:
                self.add_calendar_error('Unexpected key')
                return
        
        if not has_days:
            self.add_calendar_error('No dates selected')
        
        if not self.has_all_keys(calendar):
            self.add_calendar_error('Missing keys')

    def check_day_values(self, value : List[str]) -> bool:
        """
        Adds an error if the value (from a key of calendar) is not valid
        and returns if it was valid or not.
        """
        is_valid : bool = True

        if not isinstance(value, list):
            is_valid = False
        elif not self.are_hours_valid(value):
            is_valid = False
        
        if not is_valid:
            self.add_calendar_error()
        
        return is_valid

    def add_calendar_error(self, error_msg : str = 'Invalid value') -> None:
        """
        Adds an error to the calendar field
        """
        self.add_error('calendar', error_msg)

    def are_hours_valid(self, values : List[str]) -> bool:
        """
        Checks if the hours of the calendar are valid. Receives
        the hours in the value array of each day of the calendar.
        """
        hour_int : int

        for hour in values:
            try:
                hour_int = int(hour)
            except ValueError:
                return False
            
            # If hour is not in the expected range
            if hour_int > 20 or hour_int < 7:
                return False
        
        return True
    
    def has_all_keys(self, calendar) -> bool:
        """
        Returns if the calendar dict contains all the needed keys
        """
        for day in self.WEEK_DAYS:
            if not day in calendar:
                return False
        
        return True


class RegisterForm(CalendarChecker):

    class Meta:
        model = Register
        fields = ['first_name', 'last_name', 'group', 'mail', 'calendar']

    def clean(self) -> None:
        # Gets the data from the form
        cleaned_data : Dict[str, Any] = super().clean()
        # Add errors if needed
        self.check_calendar(cleaned_data.get('calendar'))
        
        


    




