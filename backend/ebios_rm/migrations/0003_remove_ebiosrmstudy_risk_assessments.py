# Generated by Django 5.1.4 on 2024-12-11 11:07

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("ebios_rm", "0002_alter_roto_target_objective"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="ebiosrmstudy",
            name="risk_assessments",
        ),
        migrations.RemoveField(
            model_name="roto",
            name="pertinence",
        ),
        migrations.AlterField(
            model_name="roto",
            name="feared_events",
            field=models.ManyToManyField(
                blank=True,
                related_name="ro_to_couples",
                to="ebios_rm.fearedevent",
                verbose_name="Feared events",
            ),
        ),
    ]
