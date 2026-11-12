from django.db import models

# Create your models here.


class Quote(models.Model):
    quote =models.TextField

    def __str__(self):
        return str

    