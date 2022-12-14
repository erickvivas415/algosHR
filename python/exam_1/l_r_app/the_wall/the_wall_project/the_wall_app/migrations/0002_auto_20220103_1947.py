# Generated by Django 2.2 on 2022-01-04 03:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('the_wall_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='messages',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post_comments', to='the_wall_app.Messages'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_comments', to='the_wall_app.User'),
        ),
        migrations.AlterField(
            model_name='messages',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_messages', to='the_wall_app.User'),
        ),
    ]
