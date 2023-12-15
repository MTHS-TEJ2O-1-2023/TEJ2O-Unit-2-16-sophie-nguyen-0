"""
Created by: Sophie
Created on: dec 2023
This module is a Micro:bit MicroPython program does radio messaging
"""

import radio
from microbit import *


display.clear
display.show(Image.HEART)
sleep(1000)

# setup
radio.on()
radio.config(group=1)

# Event loop.
while True:
    display.clear

    # recieves message
    new_message = radio.receive()

    if new_message == "TOO CLOSE":
        # displays message
        display.show("TOO CLOSE")

    if new_message == "SAFE":
        # displays message
        display.show("SAFE")

    else:
        display.clear

        sleep(500)
        display.show(Image.HEART_SMALL)
