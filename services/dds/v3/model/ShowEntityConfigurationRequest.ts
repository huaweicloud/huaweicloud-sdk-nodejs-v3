

export class ShowEntityConfigurationRequest {
    private 'instance_id'?: string;
    private 'entity_id'?: string;
    public constructor(instanceId?: string, entityId?: string) { 
        this['instance_id'] = instanceId;
        this['entity_id'] = entityId;
    }
    public withInstanceId(instanceId: string): ShowEntityConfigurationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEntityId(entityId: string): ShowEntityConfigurationRequest {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
}