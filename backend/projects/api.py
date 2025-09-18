from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions
from projects.serializers import CustomUserSerializer
from rest_framework.response import Response
from rest_framework import status


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    User = get_user_model()
    queryset = User.objects.all().order_by('-date_joined')
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomUserSerializer
    
    def create(self, request, *args, **kwargs):
        """
        Create a new user. This overrides the default create method to handle
        password hashing and validation.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)