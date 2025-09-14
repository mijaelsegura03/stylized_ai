from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from projects.serializers import UserSerializer


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer