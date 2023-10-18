from django.shortcuts import render

# Create your views here.


def index(request):
    fixed_days = [1, 5, 6, 8, 13, 18, 20, 24, 25, 29]
    context = {
        "days": fixed_days
    }
    return render(request, "index.html", context)
