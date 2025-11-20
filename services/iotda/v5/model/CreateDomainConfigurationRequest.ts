import { CreateDomainConfigurationDTO } from './CreateDomainConfigurationDTO';


export class CreateDomainConfigurationRequest {
    private 'Instance-Id'?: string;
    public body?: CreateDomainConfigurationDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateDomainConfigurationRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateDomainConfigurationDTO): CreateDomainConfigurationRequest {
        this['body'] = body;
        return this;
    }
}