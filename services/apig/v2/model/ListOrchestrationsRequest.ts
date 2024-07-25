

export class ListOrchestrationsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'orchestration_name'?: string;
    private 'precise_search'?: string;
    private 'orchestration_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListOrchestrationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListOrchestrationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOrchestrationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrchestrationName(orchestrationName: string): ListOrchestrationsRequest {
        this['orchestration_name'] = orchestrationName;
        return this;
    }
    public set orchestrationName(orchestrationName: string  | undefined) {
        this['orchestration_name'] = orchestrationName;
    }
    public get orchestrationName(): string | undefined {
        return this['orchestration_name'];
    }
    public withPreciseSearch(preciseSearch: string): ListOrchestrationsRequest {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
    public withOrchestrationId(orchestrationId: string): ListOrchestrationsRequest {
        this['orchestration_id'] = orchestrationId;
        return this;
    }
    public set orchestrationId(orchestrationId: string  | undefined) {
        this['orchestration_id'] = orchestrationId;
    }
    public get orchestrationId(): string | undefined {
        return this['orchestration_id'];
    }
}