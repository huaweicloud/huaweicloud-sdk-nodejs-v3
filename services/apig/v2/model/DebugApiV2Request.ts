import { ApiDebugInfo } from './ApiDebugInfo';


export class DebugApiV2Request {
    private 'instance_id'?: string;
    private 'api_id'?: string;
    public body?: ApiDebugInfo;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): DebugApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApiId(apiId: string): DebugApiV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withBody(body: ApiDebugInfo): DebugApiV2Request {
        this['body'] = body;
        return this;
    }
}