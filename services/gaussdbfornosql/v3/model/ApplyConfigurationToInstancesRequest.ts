import { ApplyConfigurationToInstancesRequestBody } from './ApplyConfigurationToInstancesRequestBody';


export class ApplyConfigurationToInstancesRequest {
    private 'config_id'?: string;
    public body?: ApplyConfigurationToInstancesRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ApplyConfigurationToInstancesRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ApplyConfigurationToInstancesRequestBody): ApplyConfigurationToInstancesRequest {
        this['body'] = body;
        return this;
    }
}