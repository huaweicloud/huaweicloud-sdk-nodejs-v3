

export class ListOrchestrationAttachedApisRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'orchestration_id'?: string;
    private 'api_name'?: string;
    private 'api_id'?: string;
    public constructor(instanceId?: string, orchestrationId?: string) { 
        this['instance_id'] = instanceId;
        this['orchestration_id'] = orchestrationId;
    }
    public withInstanceId(instanceId: string): ListOrchestrationAttachedApisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListOrchestrationAttachedApisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOrchestrationAttachedApisRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrchestrationId(orchestrationId: string): ListOrchestrationAttachedApisRequest {
        this['orchestration_id'] = orchestrationId;
        return this;
    }
    public set orchestrationId(orchestrationId: string  | undefined) {
        this['orchestration_id'] = orchestrationId;
    }
    public get orchestrationId(): string | undefined {
        return this['orchestration_id'];
    }
    public withApiName(apiName: string): ListOrchestrationAttachedApisRequest {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withApiId(apiId: string): ListOrchestrationAttachedApisRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
}