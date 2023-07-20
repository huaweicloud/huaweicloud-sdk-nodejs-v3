
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLifeCycleHookResponse extends SdkResponse {
    private 'lifecycle_hook_name'?: string;
    private 'lifecycle_hook_type'?: UpdateLifeCycleHookResponseLifecycleHookTypeEnum | string;
    private 'default_result'?: UpdateLifeCycleHookResponseDefaultResultEnum | string;
    private 'default_timeout'?: number;
    private 'notification_topic_urn'?: string;
    private 'notification_topic_name'?: string;
    private 'notification_metadata'?: string;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withLifecycleHookName(lifecycleHookName: string): UpdateLifeCycleHookResponse {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withLifecycleHookType(lifecycleHookType: UpdateLifeCycleHookResponseLifecycleHookTypeEnum | string): UpdateLifeCycleHookResponse {
        this['lifecycle_hook_type'] = lifecycleHookType;
        return this;
    }
    public set lifecycleHookType(lifecycleHookType: UpdateLifeCycleHookResponseLifecycleHookTypeEnum | string  | undefined) {
        this['lifecycle_hook_type'] = lifecycleHookType;
    }
    public get lifecycleHookType(): UpdateLifeCycleHookResponseLifecycleHookTypeEnum | string | undefined {
        return this['lifecycle_hook_type'];
    }
    public withDefaultResult(defaultResult: UpdateLifeCycleHookResponseDefaultResultEnum | string): UpdateLifeCycleHookResponse {
        this['default_result'] = defaultResult;
        return this;
    }
    public set defaultResult(defaultResult: UpdateLifeCycleHookResponseDefaultResultEnum | string  | undefined) {
        this['default_result'] = defaultResult;
    }
    public get defaultResult(): UpdateLifeCycleHookResponseDefaultResultEnum | string | undefined {
        return this['default_result'];
    }
    public withDefaultTimeout(defaultTimeout: number): UpdateLifeCycleHookResponse {
        this['default_timeout'] = defaultTimeout;
        return this;
    }
    public set defaultTimeout(defaultTimeout: number  | undefined) {
        this['default_timeout'] = defaultTimeout;
    }
    public get defaultTimeout(): number | undefined {
        return this['default_timeout'];
    }
    public withNotificationTopicUrn(notificationTopicUrn: string): UpdateLifeCycleHookResponse {
        this['notification_topic_urn'] = notificationTopicUrn;
        return this;
    }
    public set notificationTopicUrn(notificationTopicUrn: string  | undefined) {
        this['notification_topic_urn'] = notificationTopicUrn;
    }
    public get notificationTopicUrn(): string | undefined {
        return this['notification_topic_urn'];
    }
    public withNotificationTopicName(notificationTopicName: string): UpdateLifeCycleHookResponse {
        this['notification_topic_name'] = notificationTopicName;
        return this;
    }
    public set notificationTopicName(notificationTopicName: string  | undefined) {
        this['notification_topic_name'] = notificationTopicName;
    }
    public get notificationTopicName(): string | undefined {
        return this['notification_topic_name'];
    }
    public withNotificationMetadata(notificationMetadata: string): UpdateLifeCycleHookResponse {
        this['notification_metadata'] = notificationMetadata;
        return this;
    }
    public set notificationMetadata(notificationMetadata: string  | undefined) {
        this['notification_metadata'] = notificationMetadata;
    }
    public get notificationMetadata(): string | undefined {
        return this['notification_metadata'];
    }
    public withCreateTime(createTime: string): UpdateLifeCycleHookResponse {
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
export enum UpdateLifeCycleHookResponseLifecycleHookTypeEnum {
    INSTANCE_TERMINATING = 'INSTANCE_TERMINATING',
    INSTANCE_LAUNCHING = 'INSTANCE_LAUNCHING'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateLifeCycleHookResponseDefaultResultEnum {
    ABANDON = 'ABANDON',
    CONTINUE = 'CONTINUE'
}
