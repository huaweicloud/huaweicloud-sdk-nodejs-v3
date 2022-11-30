

export class RouteAttachment {
    private 'resource_id': string | undefined;
    private 'resource_type': string | undefined;
    private 'attachment_id': string | undefined;
    public constructor(resourceId?: any, resourceType?: any, attachmentId?: any) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['attachment_id'] = attachmentId;
    }
    public withResourceId(resourceId: string): RouteAttachment {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): RouteAttachment {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withAttachmentId(attachmentId: string): RouteAttachment {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
}