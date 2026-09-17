import { DevicePulsarNodeChannelPushInfoDetail } from './DevicePulsarNodeChannelPushInfoDetail';


export class UpdatePulsarNodeChannelPushInfoDTO {
    private 'device_data'?: DevicePulsarNodeChannelPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DevicePulsarNodeChannelPushInfoDetail): UpdatePulsarNodeChannelPushInfoDTO {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DevicePulsarNodeChannelPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DevicePulsarNodeChannelPushInfoDetail | undefined {
        return this['device_data'];
    }
}