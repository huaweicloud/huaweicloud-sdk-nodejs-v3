import { DevicePropertiesRequest } from './DevicePropertiesRequest';


export class UpdatePropertiesRequest {
    private 'device_id': string | undefined;
    private 'Instance-Id'?: string | undefined;
    public body?: DevicePropertiesRequest;
    public constructor(deviceId?: any) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): UpdatePropertiesRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): UpdatePropertiesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: DevicePropertiesRequest): UpdatePropertiesRequest {
        this['body'] = body;
        return this;
    }
}