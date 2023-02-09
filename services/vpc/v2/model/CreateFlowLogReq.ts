

export class CreateFlowLogReq {
    public name?: string;
    public description?: string;
    private 'resource_type': CreateFlowLogReqResourceTypeEnum | undefined;
    private 'resource_id': string | undefined;
    private 'traffic_type': CreateFlowLogReqTrafficTypeEnum | undefined;
    private 'log_group_id': string | undefined;
    private 'log_topic_id': string | undefined;
    private 'index_enabled'?: boolean | undefined;
    public constructor(resourceType?: any, resourceId?: any, trafficType?: any, logGroupId?: any, logTopicId?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['traffic_type'] = trafficType;
        this['log_group_id'] = logGroupId;
        this['log_topic_id'] = logTopicId;
    }
    public withName(name: string): CreateFlowLogReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateFlowLogReq {
        this['description'] = description;
        return this;
    }
    public withResourceType(resourceType: CreateFlowLogReqResourceTypeEnum): CreateFlowLogReq {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateFlowLogReqResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateFlowLogReq {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTrafficType(trafficType: CreateFlowLogReqTrafficTypeEnum): CreateFlowLogReq {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: CreateFlowLogReqTrafficTypeEnum | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType() {
        return this['traffic_type'];
    }
    public withLogGroupId(logGroupId: string): CreateFlowLogReq {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): CreateFlowLogReq {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId() {
        return this['log_topic_id'];
    }
    public withIndexEnabled(indexEnabled: boolean): CreateFlowLogReq {
        this['index_enabled'] = indexEnabled;
        return this;
    }
    public set indexEnabled(indexEnabled: boolean | undefined) {
        this['index_enabled'] = indexEnabled;
    }
    public get indexEnabled() {
        return this['index_enabled'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFlowLogReqResourceTypeEnum {
    PORT = 'port',
    NETWORK = 'network',
    VPC = 'vpc'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFlowLogReqTrafficTypeEnum {
    ALL = 'all',
    ACCEPT = 'accept',
    REJECT = 'reject'
}
