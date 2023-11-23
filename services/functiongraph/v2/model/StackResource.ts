

export class StackResource {
    private 'physical_resource_id'?: string;
    private 'physical_resource_name'?: string;
    private 'logical_resource_name'?: string;
    private 'logical_resource_type'?: string;
    private 'resource_status'?: string;
    private 'status_message'?: string;
    public href?: string;
    private 'display_name'?: string;
    public constructor() { 
    }
    public withPhysicalResourceId(physicalResourceId: string): StackResource {
        this['physical_resource_id'] = physicalResourceId;
        return this;
    }
    public set physicalResourceId(physicalResourceId: string  | undefined) {
        this['physical_resource_id'] = physicalResourceId;
    }
    public get physicalResourceId(): string | undefined {
        return this['physical_resource_id'];
    }
    public withPhysicalResourceName(physicalResourceName: string): StackResource {
        this['physical_resource_name'] = physicalResourceName;
        return this;
    }
    public set physicalResourceName(physicalResourceName: string  | undefined) {
        this['physical_resource_name'] = physicalResourceName;
    }
    public get physicalResourceName(): string | undefined {
        return this['physical_resource_name'];
    }
    public withLogicalResourceName(logicalResourceName: string): StackResource {
        this['logical_resource_name'] = logicalResourceName;
        return this;
    }
    public set logicalResourceName(logicalResourceName: string  | undefined) {
        this['logical_resource_name'] = logicalResourceName;
    }
    public get logicalResourceName(): string | undefined {
        return this['logical_resource_name'];
    }
    public withLogicalResourceType(logicalResourceType: string): StackResource {
        this['logical_resource_type'] = logicalResourceType;
        return this;
    }
    public set logicalResourceType(logicalResourceType: string  | undefined) {
        this['logical_resource_type'] = logicalResourceType;
    }
    public get logicalResourceType(): string | undefined {
        return this['logical_resource_type'];
    }
    public withResourceStatus(resourceStatus: string): StackResource {
        this['resource_status'] = resourceStatus;
        return this;
    }
    public set resourceStatus(resourceStatus: string  | undefined) {
        this['resource_status'] = resourceStatus;
    }
    public get resourceStatus(): string | undefined {
        return this['resource_status'];
    }
    public withStatusMessage(statusMessage: string): StackResource {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withHref(href: string): StackResource {
        this['href'] = href;
        return this;
    }
    public withDisplayName(displayName: string): StackResource {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}