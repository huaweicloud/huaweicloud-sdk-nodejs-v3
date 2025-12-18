import { ConfigurationCopyReqV3 } from './ConfigurationCopyReqV3';


export class CopyParameterGroupRequest {
    private 'config_id'?: string;
    public body?: ConfigurationCopyReqV3;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): CopyParameterGroupRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ConfigurationCopyReqV3): CopyParameterGroupRequest {
        this['body'] = body;
        return this;
    }
}