# Node.js library for kai  

## kai-nodejs is a library to communicate between the Kai Sdk and the Kai using [websocket](https://www.npmjs.com/package/websocket)

# Table of Contents

* [Methods](#Methods)
  * [auth(moduleId,moduleSecret)](#auth)
  * [setCapabilities(kaiId,capabilities)](#set-capabilities)
  * [incomingData()](incoming-data)
  * [resetCapabilities(kaiId,capabilities)](reset-capabilites)
  * [listConnectedKais()](#list-connected-kais)
  * [getKaiData(kaiId)](#get-kai-data)
  * [switchHand(kaiId,hand)](switch-hand)
  * [imuCalibration(kaiId)](imu-Callibration)
  * [fingerCalibration(kaiId)](finger-calibration)
* [Events](#events)  
  * ['authentication'](#authentication)
  * ['setCapabilities'](#setCapabilities)
  * ['incomingData'](#incomingData)
  * ['listConnectedKais'](#listConnectedKais)
  * ['getKaiData'](#getKaiData)
  * ['switchHand'](#switchHand)
  * ['imuCalibration](#imuCalibration)
  * ['fingerCalibration](#fingerCalibration)
  * ['kaiConnected'](#kaiConnected)
  * ['kaiDisconnected'](#kaiDisconnected)
  * ['default'](#default)  
* [Listeners](#listeners)  
  * ['onGesture'](#on-gesture)  
  * ['onAuthentication'](#on-authentication)
  * ['onSetCapabilities'](#on-set-capabilities)
  * ['onFingerCalibration'](#on-finger-calibration)
  * ['onGetKaiData'](#on-get-kai-data)
  * ['onListConnectedKais'](#on-list-conected-kais)
  * ['onIMUCalibration'](#on-imu-calibration)
  * ['onSwitchHand'](#on-switch-hand)
  * ['onError'](#on-error)
  * ['onIncomingData'](#on-incoming-data)
  * ['onKaiDisconnected'](#on-kai-disconnected)
  * ['onKaiConnected'](#on-kai-connected)

## Methods

* **auth(moduleId,moduleSecret) :**
  mandatory function to be called for authenticating module and subscribing to Kai data.

  ```JavaScript
  moduleId : string
  modulSecret : string
  ```

* **setCapabilities(kaiId,capabilities) :** function for subscribing Kai Data.  

  ```JS
  kaiId:number|"default"|"defaultLeft"|"defaultRight"='default'
  capabilities:{
    "gestureData": true / false,
    "fingerShortcutData": true / false,
    "linearFlickData": true / false,
    "fingerPositionData": true / false,
    "quaternionData": true / false,
    "pyrData": true / false,
    "accelerometerData": true / false,
    "gyroscopeData": true / false,
    "magnetometerData": true / false
    }
  ```

* **incomingData() :** function to recieve and handle Kai data
  
* **resetCapabilities(kaiId,capabilities) :** function for re - subscribing Kai Data, on the event of ['onKaiConnected'](#on-kai-connected) .

  ```JS
  kaiId:number|"default"|"defaultLeft"|"defaultRight"='default'
  capabilities:{
    "gestureData": true / false,
    "fingerShortcutData": true / false,
    "linearFlickData": true / false,
    "fingerPositionData": true / false,
    "quaternionData": true / false,
    "pyrData": true / false,
    "accelerometerData": true / false,
    "gyroscopeData": true / false,
    "magnetometerData": true / false
    }
  ```

* **listConnectedKais() :** function for 
