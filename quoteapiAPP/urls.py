
from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('quote/', views.QuotePostListCreate.as_view(), name='list_create')
    

]

