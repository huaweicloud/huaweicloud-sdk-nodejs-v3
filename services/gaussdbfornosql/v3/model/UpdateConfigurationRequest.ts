import { UpdateConfigurationRequestBody } from './UpdateConfigurationRequestBody';


export class UpdateConfigurationRequest {
    private 'config_id'?: string;
    public body?: UpdateConfigurationRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): UpdateConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: UpdateConfigurationRequestBody): UpdateConfigurationRequest {
        this['body'] = body;
        return this;
    }
}