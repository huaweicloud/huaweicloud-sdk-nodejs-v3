import { UpdateLifeCycleHookOption } from './UpdateLifeCycleHookOption';


export class UpdateLifeCycleHookRequest {
    private 'scaling_group_id'?: string;
    private 'lifecycle_hook_name'?: string;
    public body?: UpdateLifeCycleHookOption;
    public constructor(scalingGroupId?: string, lifecycleHookName?: string) { 
        this['scaling_group_id'] = scalingGroupId;
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public withScalingGroupId(scalingGroupId: string): UpdateLifeCycleHookRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withLifecycleHookName(lifecycleHookName: string): UpdateLifeCycleHookRequest {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withBody(body: UpdateLifeCycleHookOption): UpdateLifeCycleHookRequest {
        this['body'] = body;
        return this;
    }
}