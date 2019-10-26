// SDK communication data model

// Basic request / response for comms. other than authentication

export interface Request {
	type: 'authentication' | 'imuCalibration' | 'fingerCalibration' | 'isLatestDongle'| 'setCapabilities' | 'listConnectedKais' | 'getKaiData' | 'switchHand' | 'enableDongleDFU' | 'getBatteryLevel'|'getCapabilities';
	kaiId?: Number | 'default' | 'defaultLeft' | 'defaultRight';
	moduleId?: string;
	moduleSecret?: string;
	hand?: 'left' | 'right';
}


export interface Response {
	type: Request['type'] | 'incomingData' | 'kaiDisconnected' | 'kaiConnected' | 'dongleConnected' | 'dongleDisconnected';
	battery: number;
	kaiId?: Request['kaiId'];
	success?: boolean;
	defaultKai?: boolean;
	defaultLeftKai?: boolean;
	defaultRightKai?: boolean;
	kais?: KaiData[];
	data: Data[];
	error?: string;
	errorCode?: Number;
	message?: string;
}
export interface GetCapabilitiesRequest extends Request{
	type:'getCapabilities';
	kaiId:number|"default"|"defaultLeft"|"defaultRight";
}


export interface ErrorResponse extends Response {
	type: Request['type'];
	success: boolean;
	error: string;
	errorCode: Number;
	message: string;
}

// Authentication

export interface AuthenticationRequest extends Request {
	type: 'authentication';
	moduleId: string;
	moduleSecret: string;
}
export interface FingerCalibrationRequest extends Request{
	type: 'fingerCalibration';
	kaiId:number|"default"|"defaultLeft"|"defaultRight";

}
export interface FingerCalibrationResponse extends Response{
	type:'fingerCalibration';
	kaiId:number;
	defaultKai?:boolean;
	defaultLeftKai?:boolean;
	defaultRightKai?:boolean;
	success:boolean;
}
export interface AuthenticationResponse extends Response {
	type: 'authentication';
	success: boolean;
}

// Calibration (IMU / Finger)

export interface CalibrationRequest extends Request {
	type: 'imuCalibration' | 'fingerCalibration';
}

// Capabilities

export interface SetCapabilitiesRequest extends Request {
	type: 'setCapabilities';
	gestureData?: boolean;
	pyrData?: boolean;
	fingerShortcutData?: boolean;
	linearFlickData?: boolean;
	fingerPositionData?: boolean;
	quaternionData?: boolean;
	accelerometerData?: boolean;
	gyroscopeData?: boolean;
	magnetometerData?: boolean;
}

export interface Capability {
	type: FingerShortcutData['type'] | GestureData['type'];
}

// Kai

export interface GetBatteryLevelRequest extends Request {
	type: 'getBatteryLevel';
}

export interface SwitchHandRequest extends Request {
	type: 'switchHand';
	kai: Request['kaiId'];
	hand: Request['hand'];
}

export interface KaiConnectionMessage extends Response {
	type: 'kaiConnected' | 'kaiDisconnected';
}

export interface KaiData {
	kaiId: Number;
	hand: SwitchHandRequest['hand'];
	defaultKai?: boolean;
	defaultLeftKai?: boolean;
	defaultRightKai?: boolean;
	kairialNumber: Number;
}

export interface GetKaiDataRequest extends Request {
	type: 'getKaiData';
}

export interface GetKaiDataResponse extends Response {
	type: 'getKaiData';
	kai: KaiData;
}

export interface ListConnectedKaisRequest extends Request {
	type: 'listConnectedKais';
}

export interface ListConnectedKaisResponse extends Response {
	type: 'listConnectedKais';
	kais: KaiData[];
}

// Incoming data

export const gestureList = [
	'swipeUp',
	'swipeDown',
	'swipeRight',
	'swipeLeft',
	'sideSwipeUp',
	'sideSwipeDown',
	'sideSwipeRight',
	'sideSwipeLeft',
	// 'pinch2Begin',
	// 'pinch3Begin'
];

export interface GestureData {
	type: 'gestureData';
	gesture: 'swipeUp' | 'swipeDown' | 'swipeRight' | 'swipeLeft' | 'sideSwipeUp' | 'sideSwipeDown' | 'sideSwipeRight' | 'sideSwipeLeft' | 'pinch2Begin' | 'pinch3Begin';
}


export interface PYRData {
	type: 'pyrData' ;
	pitch: number;
	yaw:number;
	roll:number;
}

export interface FingerShortcutData {
	type: 'fingerShortcutData';
	fingers: boolean[];
}

export interface Data {

	type: GestureData['type'] | FingerShortcutData['type'] | PYRData['type'];
	gesture?: GestureData['gesture'];
	fingers?: FingerShortcutData['fingers'];
	pitch?: PYRData['pitch'];
	yaw?: PYRData['yaw'] ;
	roll?: PYRData['roll'];

}

export interface IncomingDataMessage extends Response {
	type: 'incomingData';
	foregroundProcess: 'string';
	data: Data[];
}

// Dongle

export interface DongleConnectionMessage extends Response {
	type: 'dongleConnected' | 'dongleDisconnected';
}

export interface EnableDongleDFURequest extends Request {
	type: 'enableDongleDFU';
}

export interface EnableDongleDFUResponse extends Response {
	type: 'enableDongleDFU';
}

export interface DongleFirmwareLatestRequest extends Request {
	type: 'isLatestDongle';
}

export interface DongleFirmwareLatestResponse extends Response {
	type: 'isLatestDongle';
}

// SDK Config file
