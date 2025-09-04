import { CreateAuthenticationTemplate } from './CreateAuthenticationTemplate';


export class CreateDeviceAuthenticationTemplateRequest {
    private 'Instance-Id'?: string;
    public body?: CreateAuthenticationTemplate;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateDeviceAuthenticationTemplateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateAuthenticationTemplate): CreateDeviceAuthenticationTemplateRequest {
        this['body'] = body;
        return this;
    }
}