

export class GroupBandwidthInfo {
    private 'group_id'?: string;
    private 'updated_at'?: string;
    public bandwidth?: number;
    private 'max_bandwidth'?: number;
    private 'assured_bandwidth'?: number;
    public constructor() { 
    }
    public withGroupId(groupId: string): GroupBandwidthInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withUpdatedAt(updatedAt: string): GroupBandwidthInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withBandwidth(bandwidth: number): GroupBandwidthInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withMaxBandwidth(maxBandwidth: number): GroupBandwidthInfo {
        this['max_bandwidth'] = maxBandwidth;
        return this;
    }
    public set maxBandwidth(maxBandwidth: number  | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth(): number | undefined {
        return this['max_bandwidth'];
    }
    public withAssuredBandwidth(assuredBandwidth: number): GroupBandwidthInfo {
        this['assured_bandwidth'] = assuredBandwidth;
        return this;
    }
    public set assuredBandwidth(assuredBandwidth: number  | undefined) {
        this['assured_bandwidth'] = assuredBandwidth;
    }
    public get assuredBandwidth(): number | undefined {
        return this['assured_bandwidth'];
    }
}