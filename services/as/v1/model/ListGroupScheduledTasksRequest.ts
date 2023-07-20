

export class ListGroupScheduledTasksRequest {
    private 'scaling_group_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): ListGroupScheduledTasksRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withLimit(limit: number): ListGroupScheduledTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGroupScheduledTasksRequest {
        this['marker'] = marker;
        return this;
    }
}