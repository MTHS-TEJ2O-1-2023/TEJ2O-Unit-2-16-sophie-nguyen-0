"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program does radio messaging
"""

import radio
from microbit import *


display.clear
display.show(Image.HEART)
sleep(1000)

# Event loop.
while True:
    display.clear

    # recieves message
    new_message = radio.receive()

    # displays message
    display.show(new_message)

    sleep(500)
    display.show(Image.HEART_SMALL)
