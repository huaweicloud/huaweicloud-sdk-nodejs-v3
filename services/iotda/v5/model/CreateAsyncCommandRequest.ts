import { AsyncDeviceCommandRequest } from './AsyncDeviceCommandRequest';


export class CreateAsyncCommandRequest {
    private 'device_id': string | undefined;
    private 'Instance-Id'?: string | undefined;
    public body?: AsyncDeviceCommandRequest;
    public constructor(deviceId?: any) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): CreateAsyncCommandRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): CreateAsyncCommandRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: AsyncDeviceCommandRequest): CreateAsyncCommandRequest {
        this['body'] = body;
        return this;
    }
}