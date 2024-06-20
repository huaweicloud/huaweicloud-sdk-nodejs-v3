import { CreateDeviceAuthorizer } from './CreateDeviceAuthorizer';


export class CreateDeviceAuthorizerRequest {
    private 'Instance-Id'?: string;
    public body?: CreateDeviceAuthorizer;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateDeviceAuthorizerRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateDeviceAuthorizer): CreateDeviceAuthorizerRequest {
        this['body'] = body;
        return this;
    }
}