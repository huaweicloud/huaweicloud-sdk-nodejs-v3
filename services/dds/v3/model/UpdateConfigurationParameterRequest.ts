import { UpdateConfigurationParameterRequestBody } from './UpdateConfigurationParameterRequestBody';


export class UpdateConfigurationParameterRequest {
    private 'config_id'?: string;
    public body?: UpdateConfigurationParameterRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): UpdateConfigurationParameterRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: UpdateConfigurationParameterRequestBody): UpdateConfigurationParameterRequest {
        this['body'] = body;
        return this;
    }
}