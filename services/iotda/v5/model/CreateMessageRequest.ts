import { DeviceMessageRequest } from './DeviceMessageRequest';


export class CreateMessageRequest {
    private 'device_id'?: string;
    private 'Instance-Id'?: string;
    public body?: DeviceMessageRequest;
    public constructor(deviceId?: string) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): CreateMessageRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): CreateMessageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: DeviceMessageRequest): CreateMessageRequest {
        this['body'] = body;
        return this;
    }
}