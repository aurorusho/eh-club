# Ethical Hacking Club
Backend and frontend for ethical hacking club page

## Running at local machine
To clone this project to your local machine, it is as simple as following:

Clone and create venv
```
$ git clone https://github.com/aurorusho/eh-club.git
$ python3 -m venv venv
$ . venv/bin/activate
```
Install dependencies
```
$ cd eh_club
$ pip install -r requirements.txt
```
Make migrations
```
$ python3 manage.py makemigrations # If this doesn't create \
    # migrations for registration app, \
    # run $ python3 manage.py makemigrations registration
$ python3 manage.py migrate
```
Create superuser and run server
```
$ python3 manage.py createsuperuser
$ python3 manage.py runserver
```

## Use
You can view the main page at / and you can access the admin page at /admin, in which you can login with the superuser you created

## Notes
Obviously, the SECRET_KEY in settings.py has to be changed if you want to run the project or a modification of it on production.

As this source code is only available publically because of love to open source, it still runs on sqlite, and is not able to run on production. If 
you wish, you can change the database config in settings.py

## Running version of the site:
https://ehcideb.pythonanywhere.com/

Running in free version of pythonanywhere because of lack of resources

Thank you pythonanywhere <3

Note: The page suffered little changes from the code displayed here because of the mentiones security and db issues, as well as because of problems uploading to production

[Page still not stable]
