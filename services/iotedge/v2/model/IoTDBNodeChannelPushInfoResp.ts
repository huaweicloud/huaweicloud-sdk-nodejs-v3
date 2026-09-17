import { DeviceIoTDBNodeChannelPushInfoDetail } from './DeviceIoTDBNodeChannelPushInfoDetail';


export class IoTDBNodeChannelPushInfoResp {
    private 'device_data'?: DeviceIoTDBNodeChannelPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceIoTDBNodeChannelPushInfoDetail): IoTDBNodeChannelPushInfoResp {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceIoTDBNodeChannelPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceIoTDBNodeChannelPushInfoDetail | undefined {
        return this['device_data'];
    }
}