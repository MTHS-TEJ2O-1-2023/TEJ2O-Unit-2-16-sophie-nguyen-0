/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: dec 2023
 * This program does bluetooth
*/

//variable
let distance: number = 0

//setup
basic.clearScreen()
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.pause(1000)

while (true){
  if (input.buttonIsPressed(Button.A) == true) {
    basic.clearScreen()
    //find distance
    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
    if (distance < 6) {
      radio.sendString('Too close! Move over!')
      basic.showIcon(IconNames.Sword)
    }
    else{
      radio.sendString('everything is A-Okay!')
      basic.showIcon(IconNames.Happy)
    }
  }

  radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Surprised)
  })
}