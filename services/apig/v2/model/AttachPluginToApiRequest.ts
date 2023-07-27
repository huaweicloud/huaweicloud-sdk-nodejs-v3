import { ApiOperPluginInfo } from './ApiOperPluginInfo';


export class AttachPluginToApiRequest {
    private 'instance_id'?: string;
    private 'api_id'?: string;
    public body?: ApiOperPluginInfo;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): AttachPluginToApiRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApiId(apiId: string): AttachPluginToApiRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withBody(body: ApiOperPluginInfo): AttachPluginToApiRequest {
        this['body'] = body;
        return this;
    }
}