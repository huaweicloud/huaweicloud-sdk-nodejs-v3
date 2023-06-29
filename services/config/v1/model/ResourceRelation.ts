

export class ResourceRelation {
    private 'relation_type'?: string | undefined;
    private 'from_resource_type'?: string | undefined;
    private 'to_resource_type'?: string | undefined;
    private 'from_resource_id'?: string | undefined;
    private 'to_resource_id'?: string | undefined;
    public constructor() { 
    }
    public withRelationType(relationType: string): ResourceRelation {
        this['relation_type'] = relationType;
        return this;
    }
    public set relationType(relationType: string | undefined) {
        this['relation_type'] = relationType;
    }
    public get relationType() {
        return this['relation_type'];
    }
    public withFromResourceType(fromResourceType: string): ResourceRelation {
        this['from_resource_type'] = fromResourceType;
        return this;
    }
    public set fromResourceType(fromResourceType: string | undefined) {
        this['from_resource_type'] = fromResourceType;
    }
    public get fromResourceType() {
        return this['from_resource_type'];
    }
    public withToResourceType(toResourceType: string): ResourceRelation {
        this['to_resource_type'] = toResourceType;
        return this;
    }
    public set toResourceType(toResourceType: string | undefined) {
        this['to_resource_type'] = toResourceType;
    }
    public get toResourceType() {
        return this['to_resource_type'];
    }
    public withFromResourceId(fromResourceId: string): ResourceRelation {
        this['from_resource_id'] = fromResourceId;
        return this;
    }
    public set fromResourceId(fromResourceId: string | undefined) {
        this['from_resource_id'] = fromResourceId;
    }
    public get fromResourceId() {
        return this['from_resource_id'];
    }
    public withToResourceId(toResourceId: string): ResourceRelation {
        this['to_resource_id'] = toResourceId;
        return this;
    }
    public set toResourceId(toResourceId: string | undefined) {
        this['to_resource_id'] = toResourceId;
    }
    public get toResourceId() {
        return this['to_resource_id'];
    }
}