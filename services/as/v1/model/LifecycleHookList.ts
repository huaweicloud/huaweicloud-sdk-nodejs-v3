

export class LifecycleHookList {
    private 'lifecycle_hook_name'?: string;
    private 'lifecycle_hook_type'?: LifecycleHookListLifecycleHookTypeEnum | string;
    private 'default_result'?: LifecycleHookListDefaultResultEnum | string;
    private 'default_timeout'?: number;
    private 'notification_topic_urn'?: string;
    private 'notification_topic_name'?: string;
    private 'notification_metadata'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withLifecycleHookName(lifecycleHookName: string): LifecycleHookList {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withLifecycleHookType(lifecycleHookType: LifecycleHookListLifecycleHookTypeEnum | string): LifecycleHookList {
        this['lifecycle_hook_type'] = lifecycleHookType;
        return this;
    }
    public set lifecycleHookType(lifecycleHookType: LifecycleHookListLifecycleHookTypeEnum | string  | undefined) {
        this['lifecycle_hook_type'] = lifecycleHookType;
    }
    public get lifecycleHookType(): LifecycleHookListLifecycleHookTypeEnum | string | undefined {
        return this['lifecycle_hook_type'];
    }
    public withDefaultResult(defaultResult: LifecycleHookListDefaultResultEnum | string): LifecycleHookList {
        this['default_result'] = defaultResult;
        return this;
    }
    public set defaultResult(defaultResult: LifecycleHookListDefaultResultEnum | string  | undefined) {
        this['default_result'] = defaultResult;
    }
    public get defaultResult(): LifecycleHookListDefaultResultEnum | string | undefined {
        return this['default_result'];
    }
    public withDefaultTimeout(defaultTimeout: number): LifecycleHookList {
        this['default_timeout'] = defaultTimeout;
        return this;
    }
    public set defaultTimeout(defaultTimeout: number  | undefined) {
        this['default_timeout'] = defaultTimeout;
    }
    public get defaultTimeout(): number | undefined {
        return this['default_timeout'];
    }
    public withNotificationTopicUrn(notificationTopicUrn: string): LifecycleHookList {
        this['notification_topic_urn'] = notificationTopicUrn;
        return this;
    }
    public set notificationTopicUrn(notificationTopicUrn: string  | undefined) {
        this['notification_topic_urn'] = notificationTopicUrn;
    }
    public get notificationTopicUrn(): string | undefined {
        return this['notification_topic_urn'];
    }
    public withNotificationTopicName(notificationTopicName: string): LifecycleHookList {
        this['notification_topic_name'] = notificationTopicName;
        return this;
    }
    public set notificationTopicName(notificationTopicName: string  | undefined) {
        this['notification_topic_name'] = notificationTopicName;
    }
    public get notificationTopicName(): string | undefined {
        return this['notification_topic_name'];
    }
    public withNotificationMetadata(notificationMetadata: string): LifecycleHookList {
        this['notification_metadata'] = notificationMetadata;
        return this;
    }
    public set notificationMetadata(notificationMetadata: string  | undefined) {
        this['notification_metadata'] = notificationMetadata;
    }
    public get notificationMetadata(): string | undefined {
        return this['notification_metadata'];
    }
    public withCreateTime(createTime: string): LifecycleHookList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LifecycleHookListLifecycleHookTypeEnum {
    INSTANCE_TERMINATING = 'INSTANCE_TERMINATING',
    INSTANCE_LAUNCHING = 'INSTANCE_LAUNCHING'
}
/**
    * @export
    * @enum {string}
    */
export enum LifecycleHookListDefaultResultEnum {
    ABANDON = 'ABANDON',
    CONTINUE = 'CONTINUE'
}
