import { CreateProvisioningTemplate } from './CreateProvisioningTemplate';


export class CreateProvisioningTemplateRequest {
    private 'Instance-Id'?: string;
    public body?: CreateProvisioningTemplate;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateProvisioningTemplateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateProvisioningTemplate): CreateProvisioningTemplateRequest {
        this['body'] = body;
        return this;
    }
}