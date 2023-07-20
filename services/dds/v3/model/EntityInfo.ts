

export class EntityInfo {
    private 'entity_id'?: string;
    private 'entity_name'?: string;
    public constructor(entityId?: string, entityName?: string) { 
        this['entity_id'] = entityId;
        this['entity_name'] = entityName;
    }
    public withEntityId(entityId: string): EntityInfo {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withEntityName(entityName: string): EntityInfo {
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