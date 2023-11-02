import { CopyInstanceConfigurationsRequestBody } from './CopyInstanceConfigurationsRequestBody';


export class CopyInstanceConfigurationsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'configuration_id'?: string;
    public body?: CopyInstanceConfigurationsRequestBody;
    public constructor(instanceId?: string, configurationId?: string) { 
        this['instance_id'] = instanceId;
        this['configuration_id'] = configurationId;
    }
    public withXLanguage(xLanguage: string): CopyInstanceConfigurationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CopyInstanceConfigurationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withConfigurationId(configurationId: string): CopyInstanceConfigurationsRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBody(body: CopyInstanceConfigurationsRequestBody): CopyInstanceConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}