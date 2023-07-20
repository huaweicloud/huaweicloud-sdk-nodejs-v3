import { ResourceAttribute } from './ResourceAttribute';


export class StackResource {
    private 'physical_resource_id'?: string;
    private 'physical_resource_name'?: string;
    private 'logical_resource_name'?: string;
    private 'logical_resource_type'?: string;
    private 'index_key'?: string;
    private 'resource_status'?: StackResourceResourceStatusEnum | string;
    private 'status_message'?: string;
    private 'resource_attributes'?: Array<ResourceAttribute>;
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
    public withIndexKey(indexKey: string): StackResource {
        this['index_key'] = indexKey;
        return this;
    }
    public set indexKey(indexKey: string  | undefined) {
        this['index_key'] = indexKey;
    }
    public get indexKey(): string | undefined {
        return this['index_key'];
    }
    public withResourceStatus(resourceStatus: StackResourceResourceStatusEnum | string): StackResource {
        this['resource_status'] = resourceStatus;
        return this;
    }
    public set resourceStatus(resourceStatus: StackResourceResourceStatusEnum | string  | undefined) {
        this['resource_status'] = resourceStatus;
    }
    public get resourceStatus(): StackResourceResourceStatusEnum | string | undefined {
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
    public withResourceAttributes(resourceAttributes: Array<ResourceAttribute>): StackResource {
        this['resource_attributes'] = resourceAttributes;
        return this;
    }
    public set resourceAttributes(resourceAttributes: Array<ResourceAttribute>  | undefined) {
        this['resource_attributes'] = resourceAttributes;
    }
    public get resourceAttributes(): Array<ResourceAttribute> | undefined {
        return this['resource_attributes'];
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
