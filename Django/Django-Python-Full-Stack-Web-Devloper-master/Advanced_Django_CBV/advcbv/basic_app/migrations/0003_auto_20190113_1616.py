# Generated by Django 2.1.2 on 2019-01-13 21:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('basic_app', '0002_auto_20170318_0000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='school',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='students', to='basic_app.School'),
        ),
    ]
