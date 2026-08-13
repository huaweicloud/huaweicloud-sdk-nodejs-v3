

export class ShowResourceRelationsRequest {
    private 'resource_id'?: string;
    private 'related_resource_id'?: string;
    private 'related_resource_type'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ShowResourceRelationsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withRelatedResourceId(relatedResourceId: string): ShowResourceRelationsRequest {
        this['related_resource_id'] = relatedResourceId;
        return this;
    }
    public set relatedResourceId(relatedResourceId: string  | undefined) {
        this['related_resource_id'] = relatedResourceId;
    }
    public get relatedResourceId(): string | undefined {
        return this['related_resource_id'];
    }
    public withRelatedResourceType(relatedResourceType: string): ShowResourceRelationsRequest {
        this['related_resource_type'] = relatedResourceType;
        return this;
    }
    public set relatedResourceType(relatedResourceType: string  | undefined) {
        this['related_resource_type'] = relatedResourceType;
    }
    public get relatedResourceType(): string | undefined {
        return this['related_resource_type'];
    }
    public withLimit(limit: number): ShowResourceRelationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowResourceRelationsRequest {
        this['marker'] = marker;
        return this;
    }
}