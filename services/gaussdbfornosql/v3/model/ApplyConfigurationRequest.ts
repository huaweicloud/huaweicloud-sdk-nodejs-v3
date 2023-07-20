import { ApplyConfigurationRequestBody } from './ApplyConfigurationRequestBody';


export class ApplyConfigurationRequest {
    private 'config_id'?: string;
    public body?: ApplyConfigurationRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ApplyConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ApplyConfigurationRequestBody): ApplyConfigurationRequest {
        this['body'] = body;
        return this;
    }
}