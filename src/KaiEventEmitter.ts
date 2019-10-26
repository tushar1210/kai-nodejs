import { EventEmitter } from "events";

export default class KaiEventEmitter extends EventEmitter {
    onGesture(handler: any) {
        this.addListener('gestureData',handler);
    }
    onAuthentication(handler: any) {
        this.addListener('authentication', handler);
    }
    onConnect(handler: any) {
        this.addListener('wrong',handler);
    }
    onSetCapabilities(handler:any){
        this.addListener('setCapabilities',handler);
    }
    onFingerCalibration(handler:any){
        this.addListener('fingerCalibration',handler)
    }
    onGetKaiData(handler:any){
        this.addListener('getKaiData',handler);
    }
    onListConnectedKais(handler:any){
        this.addListener('listConnectedKais',handler);
    }
    onIMUCalibration(handler:any){
        this.addListener('imuCalibration',handler);
    }
    onSwitchHand(handler:any){
        this.addListener('switchHand',handler);
    }
    onError(handler:any){
        this.addListener('error',handler);
    }
    onIncomingData(handler:any){

        this.addListener('incomingData',handler);
    }
    onGetCapabilities(handler:any){
        this.addListener('getCapabilities',handler);
    }
    onKaiDisconnected(handler:any){
        this.addListener('kaiDisconnected',handler) ;
    }
    onKaiConnected(handler:any) {
        this.addListener('kaiConnected',handler) ;
    }


    onGetCapabilities(handler:any){
        this.addListener('getCapabilities',handler)
    }
    

}