

export class PolicyTachReqBody {
    private 'entity_id'?: string;
    public constructor(entityId?: string) { 
        this['entity_id'] = entityId;
    }
    public withEntityId(entityId: string): PolicyTachReqBody {
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