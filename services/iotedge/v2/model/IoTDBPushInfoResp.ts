import { DeviceIoTDBPushInfoDetail } from './DeviceIoTDBPushInfoDetail';


export class IoTDBPushInfoResp {
    private 'device_data'?: DeviceIoTDBPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceIoTDBPushInfoDetail): IoTDBPushInfoResp {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceIoTDBPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceIoTDBPushInfoDetail | undefined {
        return this['device_data'];
    }
}