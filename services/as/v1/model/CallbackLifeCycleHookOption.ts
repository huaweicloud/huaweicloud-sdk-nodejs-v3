

export class CallbackLifeCycleHookOption {
    private 'lifecycle_action_key'?: string;
    private 'instance_id'?: string;
    private 'lifecycle_hook_name'?: string;
    private 'lifecycle_action_result'?: CallbackLifeCycleHookOptionLifecycleActionResultEnum | string;
    public constructor(lifecycleActionResult?: string) { 
        this['lifecycle_action_result'] = lifecycleActionResult;
    }
    public withLifecycleActionKey(lifecycleActionKey: string): CallbackLifeCycleHookOption {
        this['lifecycle_action_key'] = lifecycleActionKey;
        return this;
    }
    public set lifecycleActionKey(lifecycleActionKey: string  | undefined) {
        this['lifecycle_action_key'] = lifecycleActionKey;
    }
    public get lifecycleActionKey(): string | undefined {
        return this['lifecycle_action_key'];
    }
    public withInstanceId(instanceId: string): CallbackLifeCycleHookOption {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLifecycleHookName(lifecycleHookName: string): CallbackLifeCycleHookOption {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withLifecycleActionResult(lifecycleActionResult: CallbackLifeCycleHookOptionLifecycleActionResultEnum | string): CallbackLifeCycleHookOption {
        this['lifecycle_action_result'] = lifecycleActionResult;
        return this;
    }
    public set lifecycleActionResult(lifecycleActionResult: CallbackLifeCycleHookOptionLifecycleActionResultEnum | string  | undefined) {
        this['lifecycle_action_result'] = lifecycleActionResult;
    }
    public get lifecycleActionResult(): CallbackLifeCycleHookOptionLifecycleActionResultEnum | string | undefined {
        return this['lifecycle_action_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CallbackLifeCycleHookOptionLifecycleActionResultEnum {
    ABANDON = 'ABANDON',
    CONTINUE = 'CONTINUE',
    EXTEND = 'EXTEND'
}
