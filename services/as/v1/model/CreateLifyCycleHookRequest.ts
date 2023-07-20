import { CreateLifeCycleHookOption } from './CreateLifeCycleHookOption';


export class CreateLifyCycleHookRequest {
    private 'scaling_group_id'?: string;
    public body?: CreateLifeCycleHookOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): CreateLifyCycleHookRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: CreateLifeCycleHookOption): CreateLifyCycleHookRequest {
        this['body'] = body;
        return this;
    }
}