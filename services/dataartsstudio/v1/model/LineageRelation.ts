

export class LineageRelation {
    private 'from_entity_id'?: string;
    private 'relationship_id'?: string;
    private 'to_entity_id'?: string;
    public constructor() { 
    }
    public withFromEntityId(fromEntityId: string): LineageRelation {
        this['from_entity_id'] = fromEntityId;
        return this;
    }
    public set fromEntityId(fromEntityId: string  | undefined) {
        this['from_entity_id'] = fromEntityId;
    }
    public get fromEntityId(): string | undefined {
        return this['from_entity_id'];
    }
    public withRelationshipId(relationshipId: string): LineageRelation {
        this['relationship_id'] = relationshipId;
        return this;
    }
    public set relationshipId(relationshipId: string  | undefined) {
        this['relationship_id'] = relationshipId;
    }
    public get relationshipId(): string | undefined {
        return this['relationship_id'];
    }
    public withToEntityId(toEntityId: string): LineageRelation {
        this['to_entity_id'] = toEntityId;
        return this;
    }
    public set toEntityId(toEntityId: string  | undefined) {
        this['to_entity_id'] = toEntityId;
    }
    public get toEntityId(): string | undefined {
        return this['to_entity_id'];
    }
}