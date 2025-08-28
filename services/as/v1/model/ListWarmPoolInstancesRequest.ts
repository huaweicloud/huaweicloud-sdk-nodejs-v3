

export class ListWarmPoolInstancesRequest {
    private 'scaling_group_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): ListWarmPoolInstancesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withLimit(limit: number): ListWarmPoolInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListWarmPoolInstancesRequest {
        this['marker'] = marker;
        return this;
    }
}