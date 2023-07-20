

export class CreateFlowLogReq {
    public name?: string;
    public description?: string;
    private 'resource_type'?: CreateFlowLogReqResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'traffic_type'?: CreateFlowLogReqTrafficTypeEnum | string;
    private 'log_group_id'?: string;
    private 'log_topic_id'?: string;
    private 'index_enabled'?: boolean;
    public constructor(resourceType?: string, resourceId?: string, trafficType?: string, logGroupId?: string, logTopicId?: string) { 
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
    public withResourceType(resourceType: CreateFlowLogReqResourceTypeEnum | string): CreateFlowLogReq {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateFlowLogReqResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateFlowLogReqResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateFlowLogReq {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTrafficType(trafficType: CreateFlowLogReqTrafficTypeEnum | string): CreateFlowLogReq {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: CreateFlowLogReqTrafficTypeEnum | string  | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType(): CreateFlowLogReqTrafficTypeEnum | string | undefined {
        return this['traffic_type'];
    }
    public withLogGroupId(logGroupId: string): CreateFlowLogReq {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): CreateFlowLogReq {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
    public withIndexEnabled(indexEnabled: boolean): CreateFlowLogReq {
        this['index_enabled'] = indexEnabled;
        return this;
    }
    public set indexEnabled(indexEnabled: boolean  | undefined) {
        this['index_enabled'] = indexEnabled;
    }
    public get indexEnabled(): boolean | undefined {
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
