import { DeviceMqttNodeChannelPushInfoDetail } from './DeviceMqttNodeChannelPushInfoDetail';


export class UpdateMqttNodeChannelPushInfoDTO {
    private 'device_data'?: DeviceMqttNodeChannelPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceMqttNodeChannelPushInfoDetail): UpdateMqttNodeChannelPushInfoDTO {
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