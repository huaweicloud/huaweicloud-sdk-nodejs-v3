import { BatchEnterStandbyInstancesOption } from './BatchEnterStandbyInstancesOption';


export class BatchSetScalingInstancesStandbyRequest {
    private 'scaling_group_id'?: string;
    public body?: BatchEnterStandbyInstancesOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): BatchSetScalingInstancesStandbyRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: BatchEnterStandbyInstancesOption): BatchSetScalingInstancesStandbyRequest {
        this['body'] = body;
        return this;
    }
}