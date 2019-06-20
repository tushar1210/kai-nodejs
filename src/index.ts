import * as WebSocket from 'ws';
import KaiEventEmitter from './KaiEventEmitter';
import * as sdk from './sdk'
import { KaiCapabilities } from "./KaiCapabilities";

var ws = new WebSocket('ws://localhost:2203');
export let kaiEvents = new KaiEventEmitter();
export let kaiCapabilities = KaiCapabilities;

var isAuthenticated = false, capabilitiesSet = false
ws.on('message',function(data){
    let response:sdk.Response = JSON.parse(JSON.parse(JSON.stringify(data)));
    // console.log(response) 
    if(response['success']){
        switch(response['type']){
            case 'authentication':
                kaiEvents.emit('authentication',response) 
                isAuthenticated=true     
                break;
            case 'setCapabilities':
                kaiEvents.emit('setCapabilities',response)
                capabilitiesSet = true
                break;
            case 'getCapabilities':
                kaiEvents.emit('getCapabilities',response)
                break;
            case 'fingerCalibration':
                kaiEvents.emit('fingerCalibration',response)
                break;  
            case 'imuCalibration':
                kaiEvents.emit('imuCalibration',response)
                break;
            case 'listConnectedKais':
                kaiEvents.emit('listConnectedKais',response)
                break;    
            case 'getKaiData':
                kaiEvents.emit('getKaiData',response)
                break; 
            case 'switchHand':
                kaiEvents.emit('switchHand',response)
                break;     
            case 'kaiConnected':
                kaiEvents.emit('kaiConnected',response) 
                break ;
            case 'kaiDisconnected':
                kaiEvents.emit('kaiDisconnected',response)
                break ;
            case 'incomingData':
                if (isAuthenticated && capabilitiesSet) {
                    kaiEvents.emit('incomingData',response)
                }
            default:
                kaiEvents.emit('default','Invalid response')
                break;
        };
    }else{
        kaiEvents.emit(response.type,response.error)
    }
});


//TODO:-
export function setCapabilities(kaiId:number|"default"|"defaultLeft"|"defaultRight"='default',capabilities:object){ 
    var request:object = {
        type: 'setCapabilities',
        kaiId: kaiId
    }
    let req = {...request,...capabilities}
    ws.on('open',function(){
        ws.send(JSON.stringify(req));
    });

}

//NOTE : getCapbilities isn't working right now
export function getCapabilities(kaiId:number|"default"|"defaultLeft"|"defaultRight"="default"){
    let request:sdk.GetCapabilitiesRequest={
        type:'getCapabilities',
        kaiId: kaiId
    };
    ws.on('open',function(){
        ws.send(JSON.stringify(request));
    });
};

export function incomingData(){
    let request={
        type:'incomingData'
    };
    ws.on('open',function(){
        ws.send(JSON.stringify(request));
    });
}
export function fingerCalibration(kaiId:number|"default"|"defaultLeft"|"defaultRight"="default"){
    let request:sdk.FingerCalibrationRequest={
        type:'fingerCalibration',
        kaiId:kaiId
    };
    ws.on('open',function(){
        ws.send(JSON.stringify(request));
    });
};

export function listConnectedKais(){
    let request:sdk.ListConnectedKaisRequest={
        type:'listConnectedKais'
    };
    ws.on('open',function(){
        ws.send(JSON.stringify(request))
    });
};

export function getKaiData(kaiId:number|"default"|"defaultLeft"|"defaultRight"="default"){
    let request:sdk.GetKaiDataRequest = {
        type:'getKaiData',
        kaiId:kaiId
    }   
    ws.on('open',function(){
        ws.send(JSON.stringify(request))
    });    
}

export function switchHand(kaiId:number|"default"|"defaultLeft"|"defaultRight"="default",hand:"left"|"right"="left"){
    let request:sdk.SwitchHandRequest={
        type:'switchHand',
        kai:kaiId,
        hand:hand
    }
    ws.on('open',function(){
        ws.send(JSON.stringify(request))
    });  
}

export function imuCalibration(kaiId:number| "default" | "defaultLeft" | "defaultRight" = "default"){
    let request:sdk.Request = {
        type:'imuCalibration',
        kaiId:kaiId
    };
    ws.on('open',function(){
        ws.send(JSON.stringify(request))
    });
}

export function auth(moduleId:string,moduleSecret:string){
    let authToken:sdk.AuthenticationRequest={
        type:'authentication',
        moduleId:moduleId,
        moduleSecret:moduleSecret
    };

    ws.on('open',function(){
        ws.send(JSON.stringify(authToken))
    });
};

export function resetCapabilities(kaiId:number|"default"|"defaultLeft"|"defaultRight"='default',capabilities:object){
    var request:object = {
        type: 'setCapabilities',
        kaiId: kaiId
    }
    let req = {...request,...capabilities}
    ws.send(JSON.stringify(req));
}

declare interface ObjectConstructor {
    assign(objects: Object[]): Object;
}