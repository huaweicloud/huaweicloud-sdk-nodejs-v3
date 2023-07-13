

export class ListInstanceConsumerGroupsRequest {
    private 'instance_id': string | undefined;
    public offset?: string;
    public limit?: string;
    public group?: string;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceConsumerGroupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withOffset(offset: string): ListInstanceConsumerGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstanceConsumerGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withGroup(group: string): ListInstanceConsumerGroupsRequest {
        this['group'] = group;
        return this;
    }
}