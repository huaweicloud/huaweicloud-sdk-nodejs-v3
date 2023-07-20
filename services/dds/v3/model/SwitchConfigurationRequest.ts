import { ApplyConfigurationRequestBody } from './ApplyConfigurationRequestBody';


export class SwitchConfigurationRequest {
    private 'config_id'?: string;
    public body?: ApplyConfigurationRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): SwitchConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ApplyConfigurationRequestBody): SwitchConfigurationRequest {
        this['body'] = body;
        return this;
    }
}