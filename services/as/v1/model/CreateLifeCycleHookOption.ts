

export class CreateLifeCycleHookOption {
    private 'lifecycle_hook_name'?: string;
    private 'lifecycle_hook_type'?: CreateLifeCycleHookOptionLifecycleHookTypeEnum | string;
    private 'default_result'?: CreateLifeCycleHookOptionDefaultResultEnum | string;
    private 'default_timeout'?: number;
    private 'notification_topic_urn'?: string;
    private 'notification_metadata'?: string;
    public constructor(lifecycleHookName?: string, lifecycleHookType?: string, notificationTopicUrn?: string) { 
        this['lifecycle_hook_name'] = lifecycleHookName;
        this['lifecycle_hook_type'] = lifecycleHookType;
        this['notification_topic_urn'] = notificationTopicUrn;
    }
    public withLifecycleHookName(lifecycleHookName: string): CreateLifeCycleHookOption {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withLifecycleHookType(lifecycleHookType: CreateLifeCycleHookOptionLifecycleHookTypeEnum | string): CreateLifeCycleHookOption {
        this['lifecycle_hook_type'] = lifecycleHookType;
        return this;
    }
    public set lifecycleHookType(lifecycleHookType: CreateLifeCycleHookOptionLifecycleHookTypeEnum | string  | undefined) {
        this['lifecycle_hook_type'] = lifecycleHookType;
    }
    public get lifecycleHookType(): CreateLifeCycleHookOptionLifecycleHookTypeEnum | string | undefined {
        return this['lifecycle_hook_type'];
    }
    public withDefaultResult(defaultResult: CreateLifeCycleHookOptionDefaultResultEnum | string): CreateLifeCycleHookOption {
        this['default_result'] = defaultResult;
        return this;
    }
    public set defaultResult(defaultResult: CreateLifeCycleHookOptionDefaultResultEnum | string  | undefined) {
        this['default_result'] = defaultResult;
    }
    public get defaultResult(): CreateLifeCycleHookOptionDefaultResultEnum | string | undefined {
        return this['default_result'];
    }
    public withDefaultTimeout(defaultTimeout: number): CreateLifeCycleHookOption {
        this['default_timeout'] = defaultTimeout;
        return this;
    }
    public set defaultTimeout(defaultTimeout: number  | undefined) {
        this['default_timeout'] = defaultTimeout;
    }
    public get defaultTimeout(): number | undefined {
        return this['default_timeout'];
    }
    public withNotificationTopicUrn(notificationTopicUrn: string): CreateLifeCycleHookOption {
        this['notification_topic_urn'] = notificationTopicUrn;
        return this;
    }
    public set notificationTopicUrn(notificationTopicUrn: string  | undefined) {
        this['notification_topic_urn'] = notificationTopicUrn;
    }
    public get notificationTopicUrn(): string | undefined {
        return this['notification_topic_urn'];
    }
    public withNotificationMetadata(notificationMetadata: string): CreateLifeCycleHookOption {
        this['notification_metadata'] = notificationMetadata;
        return this;
    }
    public set notificationMetadata(notificationMetadata: string  | undefined) {
        this['notification_metadata'] = notificationMetadata;
    }
    public get notificationMetadata(): string | undefined {
        return this['notification_metadata'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLifeCycleHookOptionLifecycleHookTypeEnum {
    INSTANCE_TERMINATING = 'INSTANCE_TERMINATING',
    INSTANCE_LAUNCHING = 'INSTANCE_LAUNCHING'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateLifeCycleHookOptionDefaultResultEnum {
    ABANDON = 'ABANDON',
    CONTINUE = 'CONTINUE'
}
