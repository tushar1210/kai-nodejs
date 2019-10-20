# Node.js library for Kai  

## kai-nodejs is a library to communicate between the Kai Sdk and the Kai using [websocket](https://www.npmjs.com/package/websocket)

# Table of Contents

* [Methods](#Methods)
  * [auth(moduleId,moduleSecret)](#auth(moduleId,moduleSecret-:))
  * [setCapabilities(kaiId,capabilities)](#setCapabilities(kaiId,capabilities)-:)
  * [incomingData()](#incomingData()-:)
  * [resetCapabilities(kaiId,capabilities)](#resetCapabilities(kaiId,capabilities)-:)
  * [listConnectedKais()](#listConnectedKais()-:)
  * [getKaiData(kaiId)](#getKaiData(kaiId)-:)
  * [switchHand(kaiId,hand)](#switchHand(kaiId,hand)-:)
  * [imuCalibration(kaiId)](#imuCalibration(kaiId)-:)
  * [fingerCalibration(kaiId)](#fingerCalibration(kaiId))
* [Events](#events)  
  * ['authentication'](#authentication-:)
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

* ### **auth(moduleId,moduleSecret) :**
  
  mandatory method to be called for authenticating module and subscribing to Kai data.

  ```JavaScript
  moduleId : string
  modulSecret : string
  ```

* ### **setCapabilities(kaiId,capabilities) :**
  
  method for subscribing to Kai Data.  

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

* ### **incomingData() :**
  
  returns Kai data
  
* ### **resetCapabilities(kaiId,capabilities) :**

  method for re - subscribing Kai Data, on the event of ['onKaiConnected'](#on-kai-connected) .

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

* ### **listConnectedKais() :**
  
  returns the Kai data of all the connected Kai(s).

* ### **getKaiData(kaiId) :**

  returns Kai data for a particular Kai.

  ```JS
    kaiId:number|"default"|"defaultLeft"|"defaultRight"='default'
    ```

* ### **switchHand(kaiId,hand) :**

  method to switch a Kai's operating hand

    ``` JS
    kaiId:number|"default"|"defaultLeft"|"defaultRight"='default'
    hand: "left" / "right"
    ```
  
* ### **imuCalibration(kaiId)**
  
  method for enabling IMU Calibration
  
    ```JS
    kaiId:number|"default"|"defaultLeft"|"defaultRight"='default'
    ```

* ### **fingerCalibration(kaiId)**
  
  method for enabling Finger Calibration

    ```JS
    kaiId:number|"default"|"defaultLeft"|"defaultRight"='default'
    ```

<!-- ## Events

* ### **authentication :**
  
  Emitted when Kai Sdk approves/rejects a module's moduleId and/or moduleSecret

* ### **setCapabilities :**

  Returned on success/failure of [setCapabilities(kaiId,capabilities) :](#setCapabilities(kaiId,capabilities)-:)

* ### **incomingData :**
  
  Emits Kai data stream if module is sucessfully authenticated.

* ### **listConnectedkai :**

    Emits connected Kai(s) data

* ### **getKaiData :**

    Emits data of a particular Kai

* ### **switchHand :** -->
  
  




  <!-- * ['authentication'](#authentication-:)
  * ['setCapabilities'](#setCapabilities)
  * ['incomingData'](#incomingData)
  * ['listConnectedKais'](#listConnectedKais)
  * ['getKaiData'](#getKaiData)
  * ['switchHand'](#switchHand)
  * ['imuCalibration](#imuCalibration)
  * ['fingerCalibration](#fingerCalibration)
  * ['kaiConnected'](#kaiConnected)
  * ['kaiDisconnected'](#kaiDisconnected)
  * ['default'](#default) -->