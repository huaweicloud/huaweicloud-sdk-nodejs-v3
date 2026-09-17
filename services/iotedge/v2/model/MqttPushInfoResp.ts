import { DeviceMqttPushInfoDetail } from './DeviceMqttPushInfoDetail';


export class MqttPushInfoResp {
    private 'device_data'?: DeviceMqttPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceMqttPushInfoDetail): MqttPushInfoResp {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceMqttPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceMqttPushInfoDetail | undefined {
        return this['device_data'];
    }
}