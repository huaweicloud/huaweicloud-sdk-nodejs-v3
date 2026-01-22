

export class ShowConsumerConnectionsForRocketMqRequest {
    private 'instance_id'?: string;
    public group?: string;
    public limit?: number;
    public offset?: number;
    private 'is_detail'?: boolean;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): ShowConsumerConnectionsForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ShowConsumerConnectionsForRocketMqRequest {
        this['group'] = group;
        return this;
    }
    public withLimit(limit: number): ShowConsumerConnectionsForRocketMqRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowConsumerConnectionsForRocketMqRequest {
        this['offset'] = offset;
        return this;
    }
    public withIsDetail(isDetail: boolean): ShowConsumerConnectionsForRocketMqRequest {
        this['is_detail'] = isDetail;
        return this;
    }
    public set isDetail(isDetail: boolean  | undefined) {
        this['is_detail'] = isDetail;
    }
    public get isDetail(): boolean | undefined {
        return this['is_detail'];
    }
}