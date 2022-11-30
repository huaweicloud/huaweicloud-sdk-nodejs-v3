import { DeviceCommandRequest } from './DeviceCommandRequest';


export class CreateCommandRequest {
    private 'device_id': string | undefined;
    private 'Instance-Id'?: string | undefined;
    public body?: DeviceCommandRequest;
    public constructor(deviceId?: any) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): CreateCommandRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): CreateCommandRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: DeviceCommandRequest): CreateCommandRequest {
        this['body'] = body;
        return this;
    }
}