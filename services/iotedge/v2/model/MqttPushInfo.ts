import { DeviceMqttPushInfo } from './DeviceMqttPushInfo';


export class MqttPushInfo {
    private 'device_data'?: DeviceMqttPushInfo;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceMqttPushInfo): MqttPushInfo {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceMqttPushInfo  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceMqttPushInfo | undefined {
        return this['device_data'];
    }
}