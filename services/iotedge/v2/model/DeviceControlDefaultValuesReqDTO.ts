import { DeviceDefaultValues } from './DeviceDefaultValues';


export class DeviceControlDefaultValuesReqDTO {
    public devices?: Array<DeviceDefaultValues>;
    public constructor(devices?: Array<DeviceDefaultValues>) { 
        this['devices'] = devices;
    }
    public withDevices(devices: Array<DeviceDefaultValues>): DeviceControlDefaultValuesReqDTO {
        this['devices'] = devices;
        return this;
    }
}