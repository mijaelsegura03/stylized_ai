from rest_framework import routers
from projects.api import UserViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'user')

urlpatterns = router.urls