# Generated by Django 4.2.16 on 2024-09-14 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cupos', '0004_cupos_fecha_corte_cupos_max_datos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cupos',
            name='fecha_corte',
            field=models.DateField(default='2024-10-10'),
        ),
    ]
