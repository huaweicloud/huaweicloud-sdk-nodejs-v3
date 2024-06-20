import { CreateDevicePolicy } from './CreateDevicePolicy';


export class CreateDevicePolicyRequest {
    private 'Instance-Id'?: string;
    public body?: CreateDevicePolicy;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateDevicePolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateDevicePolicy): CreateDevicePolicyRequest {
        this['body'] = body;
        return this;
    }
}