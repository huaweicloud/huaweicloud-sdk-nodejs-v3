

export class ApplicableInstance {
    private 'entity_id'?: string;
    private 'config_id'?: string;
    public constructor() { 
    }
    public withEntityId(entityId: string): ApplicableInstance {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withConfigId(configId: string): ApplicableInstance {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
}