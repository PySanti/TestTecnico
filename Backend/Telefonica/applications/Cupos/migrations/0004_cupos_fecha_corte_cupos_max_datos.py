# Generated by Django 4.2.16 on 2024-09-14 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cupos', '0003_alter_cupos_numero_movil'),
    ]

    operations = [
        migrations.AddField(
            model_name='cupos',
            name='fecha_corte',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='cupos',
            name='max_datos',
            field=models.DecimalField(decimal_places=2, default=None, max_digits=10),
        ),
    ]
