# Generated by Django 5.1.1 on 2024-10-22 11:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0030_appliedcontrol_start_date"),
    ]

    operations = [
        migrations.AddField(
            model_name="asset",
            name="authenticity",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="authenticity",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="availability",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="availability",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="confidentiality",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="confidentiality",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="integrity",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="integrity",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="mtd",
            field=models.PositiveIntegerField(
                blank=True,
                help_text="Maximum Tolerable Downtime in seconds",
                null=True,
                verbose_name="mtd",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="privacy",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="privacy",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="proof",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="proof",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="rpo",
            field=models.PositiveIntegerField(
                blank=True,
                help_text="Recovery Point Objective in seconds",
                null=True,
                verbose_name="rpo",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="rto",
            field=models.PositiveIntegerField(
                blank=True,
                help_text="Recovery Time Objective in seconds",
                null=True,
                verbose_name="rto",
            ),
        ),
        migrations.AddField(
            model_name="asset",
            name="safety",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(0, "0"), (1, "1"), (2, "2"), (3, "3")],
                null=True,
                verbose_name="safety",
            ),
        ),
    ]
