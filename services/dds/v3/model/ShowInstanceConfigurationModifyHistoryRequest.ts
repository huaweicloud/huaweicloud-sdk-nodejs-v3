

export class ShowInstanceConfigurationModifyHistoryRequest {
    private 'instance_id'?: string;
    private 'entity_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, entityId?: string) { 
        this['instance_id'] = instanceId;
        this['entity_id'] = entityId;
    }
    public withInstanceId(instanceId: string): ShowInstanceConfigurationModifyHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEntityId(entityId: string): ShowInstanceConfigurationModifyHistoryRequest {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withOffset(offset: number): ShowInstanceConfigurationModifyHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowInstanceConfigurationModifyHistoryRequest {
        this['limit'] = limit;
        return this;
    }
}