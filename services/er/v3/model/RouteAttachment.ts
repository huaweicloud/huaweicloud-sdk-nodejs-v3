

export class RouteAttachment {
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    private 'attachment_id'?: string;
    public constructor(resourceId?: string, resourceType?: string, attachmentId?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['attachment_id'] = attachmentId;
    }
    public withResourceId(resourceId: string): RouteAttachment {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): RouteAttachment {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withAttachmentId(attachmentId: string): RouteAttachment {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
}