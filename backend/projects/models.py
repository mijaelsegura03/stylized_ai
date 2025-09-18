from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from datetime import date
from django.core.exceptions import ValidationError

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not extra_fields.get('first_name') or not extra_fields.get('last_name') or not extra_fields.get('birth_date'):
            raise ValidationError('All fields are required.')
        if not email:
            raise ValidationError('The email is required.')
        if self.model.objects.filter(email=email).exists():
            raise ValidationError('A user with that email already exists.')
        birth_date = extra_fields.get('birth_date')
        if not isinstance(birth_date, date):
            raise ValidationError('A valid birth date is required.')
        today = date.today()
        age = today - birth_date
        if age.days < 18 * 360:
            raise ValidationError('Users must be at least 18 years old.')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.is_active = False  # User must verify email to activate account
        user.save(using=self._db)
        return user


class CustomUserModel(AbstractUser):
    username = None #elimino el campo username de abstractuser
    email = models.EmailField(unique=True)
    birth_date = models.DateField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'birth_date']
    objects = CustomUserManager()
    class Meta:
        ordering = ['date_joined']
