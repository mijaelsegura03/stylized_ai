from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()
# Serializers define the API representation.
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'birth_date', 'password', 'date_joined')
        read_only_fields = ('id', 'date_joined')
        extra_kwargs = {
            'first_name': {'required': True, 'allow_blank': False},
            'last_name': {'required': True, 'allow_blank': False}
        }
    
    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validated data.
        """
        if User.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return User.objects.create_user(**validated_data)

    