from rest_framework import serializers
from django.contrib.auth.models import User

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url','username', 'email', 'first_name', 'last_name', 'password', 'date_joined')
        read_only_fields = ('url','date_joined')
    
    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validated data.
        """
        if User.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return User.objects.create_user(**validated_data)

    