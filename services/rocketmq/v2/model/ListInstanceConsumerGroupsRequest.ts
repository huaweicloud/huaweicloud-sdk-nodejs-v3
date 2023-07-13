

export class ListInstanceConsumerGroupsRequest {
    private 'instance_id': string | undefined;
    public group?: string;
    public limit?: number;
    public offset?: number;
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
    public withGroup(group: string): ListInstanceConsumerGroupsRequest {
        this['group'] = group;
        return this;
    }
    public withLimit(limit: number): ListInstanceConsumerGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceConsumerGroupsRequest {
        this['offset'] = offset;
        return this;
    }
}