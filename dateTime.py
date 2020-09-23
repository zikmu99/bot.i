#! /usr/bin/python3
from datetime import datetime, timedelta
from pytz import timezone
import pytz
from datetime import date
import calendar
from botConfig import botTimeZone

def getTime():
    now = datetime.now(pytz.timezone(botTimeZone))
    #now = datetime.utcnow()
    myTimeZone = " EST"
    mm = str(now.month)
    dd = str(now.day)
    yyyy = str(now.year)
    hour = str(now.hour)
    minute = str(now.minute)
    if now.minute < 10:
        minute = '0' + str(now.minute)
    second = str(now.second)
    mydate = date.today()
    if now.hour >= 12:
        ampm = ' PM'
    else:
        ampm = ' AM'
    if now.hour > 12:
        hour = str(now.hour - 12)
    weekday = calendar.day_name[mydate.weekday()]
    return "A pontos idő " + hour + ":" + minute + ampm + myTimeZone

def getDate():
    now = datetime.now(pytz.timezone(botTimeZone))
    mm = str(now.month)
    dd = str(now.day)
    yyyy = str(now.year)
    hour = str(now.hour)
    minute = str(now.minute)
    second = str(now.second)
    weekday = now.weekday()
    week = ['Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap']
    weekdayName = week[weekday]
    return "Ma " + weekdayName + ", " + mm + "/" + dd + "/" + yyyy

print("Üdv neked te mugli!")
print(getTime())
print(getDate())
