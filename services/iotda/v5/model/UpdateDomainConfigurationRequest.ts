import { UpdateDomainConfigurationDTO } from './UpdateDomainConfigurationDTO';


export class UpdateDomainConfigurationRequest {
    private 'Instance-Id'?: string;
    private 'configuration_id'?: string;
    public body?: UpdateDomainConfigurationDTO;
    public constructor(configurationId?: string) { 
        this['configuration_id'] = configurationId;
    }
    public withInstanceId(instanceId: string): UpdateDomainConfigurationRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withConfigurationId(configurationId: string): UpdateDomainConfigurationRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBody(body: UpdateDomainConfigurationDTO): UpdateDomainConfigurationRequest {
        this['body'] = body;
        return this;
    }
}