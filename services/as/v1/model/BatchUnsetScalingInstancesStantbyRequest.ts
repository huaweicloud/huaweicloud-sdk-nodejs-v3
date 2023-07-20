import { BatchExitStandByInstancesOption } from './BatchExitStandByInstancesOption';


export class BatchUnsetScalingInstancesStantbyRequest {
    private 'scaling_group_id'?: string;
    public body?: BatchExitStandByInstancesOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): BatchUnsetScalingInstancesStantbyRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: BatchExitStandByInstancesOption): BatchUnsetScalingInstancesStantbyRequest {
        this['body'] = body;
        return this;
    }
}