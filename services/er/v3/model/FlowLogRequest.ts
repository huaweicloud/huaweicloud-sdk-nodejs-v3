

export class FlowLogRequest {
    public name?: string;
    public description?: string;
    private 'resource_type'?: FlowLogRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'log_store_type'?: FlowLogRequestLogStoreTypeEnum | string;
    public constructor(name?: string, resourceType?: string, resourceId?: string, logGroupId?: string, logStreamId?: string, logStoreType?: string) { 
        this['name'] = name;
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['log_store_type'] = logStoreType;
    }
    public withName(name: string): FlowLogRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FlowLogRequest {
        this['description'] = description;
        return this;
    }
    public withResourceType(resourceType: FlowLogRequestResourceTypeEnum | string): FlowLogRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: FlowLogRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): FlowLogRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): FlowLogRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLogGroupId(logGroupId: string): FlowLogRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): FlowLogRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStoreType(logStoreType: FlowLogRequestLogStoreTypeEnum | string): FlowLogRequest {
        this['log_store_type'] = logStoreType;
        return this;
    }
    public set logStoreType(logStoreType: FlowLogRequestLogStoreTypeEnum | string  | undefined) {
        this['log_store_type'] = logStoreType;
    }
    public get logStoreType(): FlowLogRequestLogStoreTypeEnum | string | undefined {
        return this['log_store_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowLogRequestResourceTypeEnum {
    ATTACHMENT = 'attachment'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowLogRequestLogStoreTypeEnum {
    LTS = 'LTS'
}
