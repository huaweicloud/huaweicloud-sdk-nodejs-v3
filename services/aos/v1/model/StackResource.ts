

export class StackResource {
    private 'physical_resource_id'?: string | undefined;
    private 'physical_resource_name'?: string | undefined;
    private 'logical_resource_name'?: string | undefined;
    private 'logical_resource_type'?: string | undefined;
    private 'index_key'?: string | undefined;
    private 'resource_status'?: StackResourceResourceStatusEnum | undefined;
    private 'status_message'?: string | undefined;
    public constructor() { 
    }
    public withPhysicalResourceId(physicalResourceId: string): StackResource {
        this['physical_resource_id'] = physicalResourceId;
        return this;
    }
    public set physicalResourceId(physicalResourceId: string | undefined) {
        this['physical_resource_id'] = physicalResourceId;
    }
    public get physicalResourceId() {
        return this['physical_resource_id'];
    }
    public withPhysicalResourceName(physicalResourceName: string): StackResource {
        this['physical_resource_name'] = physicalResourceName;
        return this;
    }
    public set physicalResourceName(physicalResourceName: string | undefined) {
        this['physical_resource_name'] = physicalResourceName;
    }
    public get physicalResourceName() {
        return this['physical_resource_name'];
    }
    public withLogicalResourceName(logicalResourceName: string): StackResource {
        this['logical_resource_name'] = logicalResourceName;
        return this;
    }
    public set logicalResourceName(logicalResourceName: string | undefined) {
        this['logical_resource_name'] = logicalResourceName;
    }
    public get logicalResourceName() {
        return this['logical_resource_name'];
    }
    public withLogicalResourceType(logicalResourceType: string): StackResource {
        this['logical_resource_type'] = logicalResourceType;
        return this;
    }
    public set logicalResourceType(logicalResourceType: string | undefined) {
        this['logical_resource_type'] = logicalResourceType;
    }
    public get logicalResourceType() {
        return this['logical_resource_type'];
    }
    public withIndexKey(indexKey: string): StackResource {
        this['index_key'] = indexKey;
        return this;
    }
    public set indexKey(indexKey: string | undefined) {
        this['index_key'] = indexKey;
    }
    public get indexKey() {
        return this['index_key'];
    }
    public withResourceStatus(resourceStatus: StackResourceResourceStatusEnum): StackResource {
        this['resource_status'] = resourceStatus;
        return this;
    }
    public set resourceStatus(resourceStatus: StackResourceResourceStatusEnum | undefined) {
        this['resource_status'] = resourceStatus;
    }
    public get resourceStatus() {
        return this['resource_status'];
    }
    public withStatusMessage(statusMessage: string): StackResource {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage() {
        return this['status_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackResourceResourceStatusEnum {
    CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS',
    CREATION_FAILED = 'CREATION_FAILED',
    CREATION_COMPLETE = 'CREATION_COMPLETE',
    DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS',
    DELETION_FAILED = 'DELETION_FAILED',
    DELETION_COMPLETE = 'DELETION_COMPLETE',
    UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS',
    UPDATE_FAILED = 'UPDATE_FAILED',
    UPDATE_COMPLETE = 'UPDATE_COMPLETE'
}
