import { DeviceInfluxDB2NodeChannelPushInfoDetail } from './DeviceInfluxDB2NodeChannelPushInfoDetail';


export class InfluxDB2NodeChannelPushInfoRsp {
    private 'device_data'?: DeviceInfluxDB2NodeChannelPushInfoDetail;
    public constructor() { 
    }
    public withDeviceData(deviceData: DeviceInfluxDB2NodeChannelPushInfoDetail): InfluxDB2NodeChannelPushInfoRsp {
        this['device_data'] = deviceData;
        return this;
    }
    public set deviceData(deviceData: DeviceInfluxDB2NodeChannelPushInfoDetail  | undefined) {
        this['device_data'] = deviceData;
    }
    public get deviceData(): DeviceInfluxDB2NodeChannelPushInfoDetail | undefined {
        return this['device_data'];
    }
}