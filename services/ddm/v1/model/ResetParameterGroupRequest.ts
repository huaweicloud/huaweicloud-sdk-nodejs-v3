import { ConfigurationUpdateReqV3 } from './ConfigurationUpdateReqV3';


export class ResetParameterGroupRequest {
    private 'config_id'?: string;
    public body?: ConfigurationUpdateReqV3;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ResetParameterGroupRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ConfigurationUpdateReqV3): ResetParameterGroupRequest {
        this['body'] = body;
        return this;
    }
}