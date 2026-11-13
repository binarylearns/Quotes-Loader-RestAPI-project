from django.shortcuts import render
from rest_framework import generics
from .models import Quote
from .serializers import QuoteSerializer

# Create your views here.

def home(request):
    return render(request, 'index.html')

class QuotePostListCreate(generics.ListCreateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

class QuotePostRetriveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    lookup_field ="pk"


