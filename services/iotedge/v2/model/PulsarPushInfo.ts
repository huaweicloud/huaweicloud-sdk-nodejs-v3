import { DevicePulsarPushInfo } from './DevicePulsarPushInfo';


export class PulsarPushInfo {
    private 'device_data'?: DevicePulsarPushInfo;
    public constructor() { 
    }
    public withDeviceData(deviceData: DevicePulsarPushInfo): PulsarPushInfo {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DevicePulsarPushInfo  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DevicePulsarPushInfo | undefined {
        return this['device_data'];
    }
}