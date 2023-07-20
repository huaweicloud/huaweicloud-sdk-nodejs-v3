import { BatchUnprotectInstancesOption } from './BatchUnprotectInstancesOption';


export class BatchUnprotectScalingInstancesRequest {
    private 'scaling_group_id'?: string;
    public body?: BatchUnprotectInstancesOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): BatchUnprotectScalingInstancesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: BatchUnprotectInstancesOption): BatchUnprotectScalingInstancesRequest {
        this['body'] = body;
        return this;
    }
}