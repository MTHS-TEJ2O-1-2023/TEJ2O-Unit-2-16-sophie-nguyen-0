/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: dec 2023
 * This program does bluetooth
*/


// setup
basic.clearScreen()
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()


// recieve message
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})

