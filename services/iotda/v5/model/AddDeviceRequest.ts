import { AddDevice } from './AddDevice';


export class AddDeviceRequest {
    private 'Instance-Id'?: string;
    public body?: AddDevice;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddDeviceRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddDevice): AddDeviceRequest {
        this['body'] = body;
        return this;
    }
}