import { DeviceMqttNodeChannelPushInfoDetail } from './DeviceMqttNodeChannelPushInfoDetail';


export class MqttNodeChannelPushInfoRsp {
    private 'device_data'?: DeviceMqttNodeChannelPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceMqttNodeChannelPushInfoDetail): MqttNodeChannelPushInfoRsp {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceMqttNodeChannelPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceMqttNodeChannelPushInfoDetail | undefined {
        return this['device_data'];
    }
}