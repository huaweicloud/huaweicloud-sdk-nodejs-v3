

export class EntityResult {
    private 'entity_id'?: string;
    private 'entity_name'?: string;
    public constructor() { 
    }
    public withEntityId(entityId: string): EntityResult {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withEntityName(entityName: string): EntityResult {
        this['entity_name'] = entityName;
        return this;
    }
    public set entityName(entityName: string  | undefined) {
        this['entity_name'] = entityName;
    }
    public get entityName(): string | undefined {
        return this['entity_name'];
    }
}