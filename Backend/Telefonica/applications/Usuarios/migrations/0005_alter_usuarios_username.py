# Generated by Django 4.2.16 on 2024-09-13 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuarios', '0004_usuarios_nombre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='username',
            field=models.CharField(default=' ', max_length=40, unique=True),
        ),
    ]
