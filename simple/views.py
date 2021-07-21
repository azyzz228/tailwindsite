from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def home(request):
    context = {}
    return render(request, "simple/base.html", context)
