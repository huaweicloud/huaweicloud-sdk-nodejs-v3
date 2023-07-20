

export class UpdateLifeCycleHookOption {
    private 'lifecycle_hook_type'?: UpdateLifeCycleHookOptionLifecycleHookTypeEnum | string;
    private 'default_result'?: UpdateLifeCycleHookOptionDefaultResultEnum | string;
    private 'default_timeout'?: number;
    private 'notification_topic_urn'?: string;
    private 'notification_metadata'?: string;
    public constructor() { 
    }
    public withLifecycleHookType(lifecycleHookType: UpdateLifeCycleHookOptionLifecycleHookTypeEnum | string): UpdateLifeCycleHookOption {
        this['lifecycle_hook_type'] = lifecycleHookType;
        return this;
    }
    public set lifecycleHookType(lifecycleHookType: UpdateLifeCycleHookOptionLifecycleHookTypeEnum | string  | undefined) {
        this['lifecycle_hook_type'] = lifecycleHookType;
    }
    public get lifecycleHookType(): UpdateLifeCycleHookOptionLifecycleHookTypeEnum | string | undefined {
        return this['lifecycle_hook_type'];
    }
    public withDefaultResult(defaultResult: UpdateLifeCycleHookOptionDefaultResultEnum | string): UpdateLifeCycleHookOption {
        this['default_result'] = defaultResult;
        return this;
    }
    public set defaultResult(defaultResult: UpdateLifeCycleHookOptionDefaultResultEnum | string  | undefined) {
        this['default_result'] = defaultResult;
    }
    public get defaultResult(): UpdateLifeCycleHookOptionDefaultResultEnum | string | undefined {
        return this['default_result'];
    }
    public withDefaultTimeout(defaultTimeout: number): UpdateLifeCycleHookOption {
        this['default_timeout'] = defaultTimeout;
        return this;
    }
    public set defaultTimeout(defaultTimeout: number  | undefined) {
        this['default_timeout'] = defaultTimeout;
    }
    public get defaultTimeout(): number | undefined {
        return this['default_timeout'];
    }
    public withNotificationTopicUrn(notificationTopicUrn: string): UpdateLifeCycleHookOption {
        this['notification_topic_urn'] = notificationTopicUrn;
        return this;
    }
    public set notificationTopicUrn(notificationTopicUrn: string  | undefined) {
        this['notification_topic_urn'] = notificationTopicUrn;
    }
    public get notificationTopicUrn(): string | undefined {
        return this['notification_topic_urn'];
    }
    public withNotificationMetadata(notificationMetadata: string): UpdateLifeCycleHookOption {
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
export enum UpdateLifeCycleHookOptionLifecycleHookTypeEnum {
    INSTANCE_TERMINATING = 'INSTANCE_TERMINATING',
    INSTANCE_LAUNCHING = 'INSTANCE_LAUNCHING'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateLifeCycleHookOptionDefaultResultEnum {
    ABANDON = 'ABANDON',
    CONTINUE = 'CONTINUE'
}
