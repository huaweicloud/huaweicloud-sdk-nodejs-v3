

export class UpdateGroupBandwidthInfoRequest {
    private 'group_id'?: string;
    private 'target_bandwidth'?: number;
    public constructor(groupId?: string, targetBandwidth?: number) { 
        this['group_id'] = groupId;
        this['target_bandwidth'] = targetBandwidth;
    }
    public withGroupId(groupId: string): UpdateGroupBandwidthInfoRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withTargetBandwidth(targetBandwidth: number): UpdateGroupBandwidthInfoRequest {
        this['target_bandwidth'] = targetBandwidth;
        return this;
    }
    public set targetBandwidth(targetBandwidth: number  | undefined) {
        this['target_bandwidth'] = targetBandwidth;
    }
    public get targetBandwidth(): number | undefined {
        return this['target_bandwidth'];
    }
}