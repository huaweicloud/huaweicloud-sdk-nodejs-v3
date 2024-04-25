import { AddDeviceProxy } from './AddDeviceProxy';


export class CreateDeviceProxyRequest {
    private 'Instance-Id'?: string;
    public body?: AddDeviceProxy;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateDeviceProxyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddDeviceProxy): CreateDeviceProxyRequest {
        this['body'] = body;
        return this;
    }
}