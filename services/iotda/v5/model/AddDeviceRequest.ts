import { AddDevice } from './AddDevice';


export class AddDeviceRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: AddDevice;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddDeviceRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: AddDevice): AddDeviceRequest {
        this['body'] = body;
        return this;
    }
}