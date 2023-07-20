import { BatchProtectInstancesOption } from './BatchProtectInstancesOption';


export class BatchProtectScalingInstancesRequest {
    private 'scaling_group_id'?: string;
    public body?: BatchProtectInstancesOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): BatchProtectScalingInstancesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: BatchProtectInstancesOption): BatchProtectScalingInstancesRequest {
        this['body'] = body;
        return this;
    }
}