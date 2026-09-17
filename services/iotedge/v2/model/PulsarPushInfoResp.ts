import { DevicePulsarPushInfoDetail } from './DevicePulsarPushInfoDetail';


export class PulsarPushInfoResp {
    private 'device_data'?: DevicePulsarPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DevicePulsarPushInfoDetail): PulsarPushInfoResp {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DevicePulsarPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DevicePulsarPushInfoDetail | undefined {
        return this['device_data'];
    }
}