import { DeviceInfluxDB2PushInfo } from './DeviceInfluxDB2PushInfo';


export class InfluxDB2PushInfo {
    private 'device_data'?: DeviceInfluxDB2PushInfo;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceInfluxDB2PushInfo): InfluxDB2PushInfo {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceInfluxDB2PushInfo  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceInfluxDB2PushInfo | undefined {
        return this['device_data'];
    }
}