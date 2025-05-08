

export class ListInstanceConsumerGroupMembersRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public offset?: number;
    public limit?: number;
    public host?: string;
    private 'member_id'?: string;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): ListInstanceConsumerGroupMembersRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstanceConsumerGroupMembersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ListInstanceConsumerGroupMembersRequest {
        this['group'] = group;
        return this;
    }
    public withOffset(offset: number): ListInstanceConsumerGroupMembersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceConsumerGroupMembersRequest {
        this['limit'] = limit;
        return this;
    }
    public withHost(host: string): ListInstanceConsumerGroupMembersRequest {
        this['host'] = host;
        return this;
    }
    public withMemberId(memberId: string): ListInstanceConsumerGroupMembersRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
}