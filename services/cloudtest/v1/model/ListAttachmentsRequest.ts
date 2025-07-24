

export class ListAttachmentsRequest {
    private 'project_id'?: string;
    private 'resource_uri'?: string;
    private 'resource_type'?: string;
    public constructor(projectId?: string, resourceUri?: string, resourceType?: string) { 
        this['project_id'] = projectId;
        this['resource_uri'] = resourceUri;
        this['resource_type'] = resourceType;
    }
    public withProjectId(projectId: string): ListAttachmentsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceUri(resourceUri: string): ListAttachmentsRequest {
        this['resource_uri'] = resourceUri;
        return this;
    }
    public set resourceUri(resourceUri: string  | undefined) {
        this['resource_uri'] = resourceUri;
    }
    public get resourceUri(): string | undefined {
        return this['resource_uri'];
    }
    public withResourceType(resourceType: string): ListAttachmentsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}