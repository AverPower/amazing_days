from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Tags(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tag = models.CharField(max_length=20)
    color = models.CharField(max_length=20)


class Activity(models.Model):
    date = models.DateField(auto_now=False, auto_now_add=False)
    tag = models.ForeignKey(Tags, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)







