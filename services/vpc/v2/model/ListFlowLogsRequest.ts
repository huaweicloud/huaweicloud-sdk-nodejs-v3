

export class ListFlowLogsRequest {
    public id?: string;
    public name?: string;
    private 'tenant_id'?: string | undefined;
    public description?: string;
    private 'resource_type'?: ListFlowLogsRequestResourceTypeEnum | undefined;
    private 'resource_id'?: string | undefined;
    private 'traffic_type'?: ListFlowLogsRequestTrafficTypeEnum | undefined;
    private 'log_group_id'?: string | undefined;
    private 'log_topic_id'?: string | undefined;
    private 'log_store_type'?: ListFlowLogsRequestLogStoreTypeEnum | undefined;
    public status?: ListFlowLogsRequestStatusEnum;
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListFlowLogsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListFlowLogsRequest {
        this['name'] = name;
        return this;
    }
    public withTenantId(tenantId: string): ListFlowLogsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withDescription(description: string): ListFlowLogsRequest {
        this['description'] = description;
        return this;
    }
    public withResourceType(resourceType: ListFlowLogsRequestResourceTypeEnum): ListFlowLogsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListFlowLogsRequestResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListFlowLogsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTrafficType(trafficType: ListFlowLogsRequestTrafficTypeEnum): ListFlowLogsRequest {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: ListFlowLogsRequestTrafficTypeEnum | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType() {
        return this['traffic_type'];
    }
    public withLogGroupId(logGroupId: string): ListFlowLogsRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): ListFlowLogsRequest {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId() {
        return this['log_topic_id'];
    }
    public withLogStoreType(logStoreType: ListFlowLogsRequestLogStoreTypeEnum): ListFlowLogsRequest {
        this['log_store_type'] = logStoreType;
        return this;
    }
    public set logStoreType(logStoreType: ListFlowLogsRequestLogStoreTypeEnum | undefined) {
        this['log_store_type'] = logStoreType;
    }
    public get logStoreType() {
        return this['log_store_type'];
    }
    public withStatus(status: ListFlowLogsRequestStatusEnum): ListFlowLogsRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: string): ListFlowLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFlowLogsRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestResourceTypeEnum {
    PORT = 'port',
    NETWORK = 'network',
    VPC = 'vpc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestTrafficTypeEnum {
    ALL = 'all',
    REJECT = 'reject',
    ACCEPT = 'accept'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestLogStoreTypeEnum {
    LTS = 'lts'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    ERROR = 'ERROR'
}
