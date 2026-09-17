import { DeviceIoTDBPushInfo } from './DeviceIoTDBPushInfo';


export class IoTDBPushInfo {
    private 'device_data'?: DeviceIoTDBPushInfo;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceIoTDBPushInfo): IoTDBPushInfo {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceIoTDBPushInfo  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceIoTDBPushInfo | undefined {
        return this['device_data'];
    }
}