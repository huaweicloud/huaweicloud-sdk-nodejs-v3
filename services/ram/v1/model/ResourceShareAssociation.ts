

export class ResourceShareAssociation {
    private 'associated_entity'?: string;
    private 'association_type'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public external?: boolean;
    private 'resource_share_id'?: string;
    private 'resource_share_name'?: string;
    public status?: string;
    private 'status_message'?: string;
    public constructor(associatedEntity?: string, associationType?: string, createdAt?: Date, updatedAt?: Date, resourceShareId?: string, resourceShareName?: string, status?: string) { 
        this['associated_entity'] = associatedEntity;
        this['association_type'] = associationType;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['resource_share_id'] = resourceShareId;
        this['resource_share_name'] = resourceShareName;
        this['status'] = status;
    }
    public withAssociatedEntity(associatedEntity: string): ResourceShareAssociation {
        this['associated_entity'] = associatedEntity;
        return this;
    }
    public set associatedEntity(associatedEntity: string  | undefined) {
        this['associated_entity'] = associatedEntity;
    }
    public get associatedEntity(): string | undefined {
        return this['associated_entity'];
    }
    public withAssociationType(associationType: string): ResourceShareAssociation {
        this['association_type'] = associationType;
        return this;
    }
    public set associationType(associationType: string  | undefined) {
        this['association_type'] = associationType;
    }
    public get associationType(): string | undefined {
        return this['association_type'];
    }
    public withCreatedAt(createdAt: Date): ResourceShareAssociation {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ResourceShareAssociation {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withExternal(external: boolean): ResourceShareAssociation {
        this['external'] = external;
        return this;
    }
    public withResourceShareId(resourceShareId: string): ResourceShareAssociation {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withResourceShareName(resourceShareName: string): ResourceShareAssociation {
        this['resource_share_name'] = resourceShareName;
        return this;
    }
    public set resourceShareName(resourceShareName: string  | undefined) {
        this['resource_share_name'] = resourceShareName;
    }
    public get resourceShareName(): string | undefined {
        return this['resource_share_name'];
    }
    public withStatus(status: string): ResourceShareAssociation {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): ResourceShareAssociation {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
}