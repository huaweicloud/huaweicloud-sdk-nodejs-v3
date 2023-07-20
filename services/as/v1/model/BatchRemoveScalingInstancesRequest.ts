import { BatchRemoveInstancesOption } from './BatchRemoveInstancesOption';


export class BatchRemoveScalingInstancesRequest {
    private 'scaling_group_id'?: string;
    public body?: BatchRemoveInstancesOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): BatchRemoveScalingInstancesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: BatchRemoveInstancesOption): BatchRemoveScalingInstancesRequest {
        this['body'] = body;
        return this;
    }
}