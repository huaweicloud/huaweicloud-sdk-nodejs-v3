

export class InstanceHangingInfos {
    private 'lifecycle_hook_name'?: string;
    private 'lifecycle_action_key'?: string;
    private 'instance_id'?: string;
    private 'scaling_group_id'?: string;
    private 'lifecycle_hook_status'?: InstanceHangingInfosLifecycleHookStatusEnum | string;
    public timeout?: string;
    private 'default_result'?: string;
    public constructor() { 
    }
    public withLifecycleHookName(lifecycleHookName: string): InstanceHangingInfos {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withLifecycleActionKey(lifecycleActionKey: string): InstanceHangingInfos {
        this['lifecycle_action_key'] = lifecycleActionKey;
        return this;
    }
    public set lifecycleActionKey(lifecycleActionKey: string  | undefined) {
        this['lifecycle_action_key'] = lifecycleActionKey;
    }
    public get lifecycleActionKey(): string | undefined {
        return this['lifecycle_action_key'];
    }
    public withInstanceId(instanceId: string): InstanceHangingInfos {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withScalingGroupId(scalingGroupId: string): InstanceHangingInfos {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withLifecycleHookStatus(lifecycleHookStatus: InstanceHangingInfosLifecycleHookStatusEnum | string): InstanceHangingInfos {
        this['lifecycle_hook_status'] = lifecycleHookStatus;
        return this;
    }
    public set lifecycleHookStatus(lifecycleHookStatus: InstanceHangingInfosLifecycleHookStatusEnum | string  | undefined) {
        this['lifecycle_hook_status'] = lifecycleHookStatus;
    }
    public get lifecycleHookStatus(): InstanceHangingInfosLifecycleHookStatusEnum | string | undefined {
        return this['lifecycle_hook_status'];
    }
    public withTimeout(timeout: string): InstanceHangingInfos {
        this['timeout'] = timeout;
        return this;
    }
    public withDefaultResult(defaultResult: string): InstanceHangingInfos {
        this['default_result'] = defaultResult;
        return this;
    }
    public set defaultResult(defaultResult: string  | undefined) {
        this['default_result'] = defaultResult;
    }
    public get defaultResult(): string | undefined {
        return this['default_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceHangingInfosLifecycleHookStatusEnum {
    HANGING = 'HANGING',
    CONTINUE = 'CONTINUE',
    ABANDON = 'ABANDON'
}
