from django.urls import path
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from . import views

urlpatterns=[
    path('', views.index),  
    path('add-to-cart', views.add_to_cart),
    path('filter', views.filter_menu),
    path('delete-cart-item', views.delete_cart_item)  
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)