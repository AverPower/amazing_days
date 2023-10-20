from django.shortcuts import render
import json
# Create your views here.


def index(request):
    fixed_days = [1, 5, 6, 8, 13, 18, 19, 24, 25, 29]
    colors = ['rgb(255, 0, 0), rgb(0, 255, 0)', "rgb(255, 0, 0), rgb(255, 0, 0)", "rgb(255, 0, 0), rgb(0, 255, 0)", "rgb(255, 0, 0), rgb(255, 0, 0)", "rgb(255, 0, 0), rgb(255, 0, 0)",
              "rgb(0, 255, 0), rgb(0, 255, 0)", "rgb(0, 255, 0), rgb(0, 255, 0)", "rgb(255, 0, 0), rgb(0, 255, 0)", "rgb(0, 255, 0), rgb(0, 255, 0)", "rgb(0, 255, 0), rgb(0, 255, 0)"]
    params = dict(zip(fixed_days, colors))
    context = {
        "params": json.dumps(params),
    }
    return render(request, "index.html", context)
