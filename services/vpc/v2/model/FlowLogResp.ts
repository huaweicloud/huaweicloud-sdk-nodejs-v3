

export class FlowLogResp {
    public id: string;
    public name: string;
    private 'tenant_id': string | undefined;
    public description: string;
    private 'resource_type': FlowLogRespResourceTypeEnum | undefined;
    private 'resource_id': string | undefined;
    private 'traffic_type': FlowLogRespTrafficTypeEnum | undefined;
    private 'log_group_id': string | undefined;
    private 'log_topic_id': string | undefined;
    private 'log_store_type': FlowLogRespLogStoreTypeEnum | undefined;
    private 'created_at': string | undefined;
    private 'updated_at': string | undefined;
    private 'admin_state': boolean | undefined;
    public status: FlowLogRespStatusEnum;
    public constructor(id?: any, name?: any, tenantId?: any, description?: any, resourceType?: any, resourceId?: any, trafficType?: any, logGroupId?: any, logTopicId?: any, logStoreType?: any, createdAt?: any, updatedAt?: any, adminState?: any, status?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['tenant_id'] = tenantId;
        this['description'] = description;
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['traffic_type'] = trafficType;
        this['log_group_id'] = logGroupId;
        this['log_topic_id'] = logTopicId;
        this['log_store_type'] = logStoreType;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['admin_state'] = adminState;
        this['status'] = status;
    }
    public withId(id: string): FlowLogResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlowLogResp {
        this['name'] = name;
        return this;
    }
    public withTenantId(tenantId: string): FlowLogResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withDescription(description: string): FlowLogResp {
        this['description'] = description;
        return this;
    }
    public withResourceType(resourceType: FlowLogRespResourceTypeEnum): FlowLogResp {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: FlowLogRespResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): FlowLogResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTrafficType(trafficType: FlowLogRespTrafficTypeEnum): FlowLogResp {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: FlowLogRespTrafficTypeEnum | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType() {
        return this['traffic_type'];
    }
    public withLogGroupId(logGroupId: string): FlowLogResp {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): FlowLogResp {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId() {
        return this['log_topic_id'];
    }
    public withLogStoreType(logStoreType: FlowLogRespLogStoreTypeEnum): FlowLogResp {
        this['log_store_type'] = logStoreType;
        return this;
    }
    public set logStoreType(logStoreType: FlowLogRespLogStoreTypeEnum | undefined) {
        this['log_store_type'] = logStoreType;
    }
    public get logStoreType() {
        return this['log_store_type'];
    }
    public withCreatedAt(createdAt: string): FlowLogResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): FlowLogResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withAdminState(adminState: boolean): FlowLogResp {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: boolean | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState() {
        return this['admin_state'];
    }
    public withStatus(status: FlowLogRespStatusEnum): FlowLogResp {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowLogRespResourceTypeEnum {
    PORT = 'port',
    NETWORK = 'network',
    VPC = 'vpc'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowLogRespTrafficTypeEnum {
    ALL = 'all',
    ACCEPT = 'accept',
    REJECT = 'reject'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowLogRespLogStoreTypeEnum {
    LTS = 'lts'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowLogRespStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    ERROR = 'ERROR'
}
