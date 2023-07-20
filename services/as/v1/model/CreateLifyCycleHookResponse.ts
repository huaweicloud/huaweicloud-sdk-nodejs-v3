
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLifyCycleHookResponse extends SdkResponse {
    private 'lifecycle_hook_name'?: string;
    private 'lifecycle_hook_type'?: CreateLifyCycleHookResponseLifecycleHookTypeEnum | string;
    private 'default_result'?: CreateLifyCycleHookResponseDefaultResultEnum | string;
    private 'default_timeout'?: number;
    private 'notification_topic_urn'?: string;
    private 'notification_topic_name'?: string;
    private 'notification_metadata'?: string;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withLifecycleHookName(lifecycleHookName: string): CreateLifyCycleHookResponse {
        this['lifecycle_hook_name'] = lifecycleHookName;
        return this;
    }
    public set lifecycleHookName(lifecycleHookName: string  | undefined) {
        this['lifecycle_hook_name'] = lifecycleHookName;
    }
    public get lifecycleHookName(): string | undefined {
        return this['lifecycle_hook_name'];
    }
    public withLifecycleHookType(lifecycleHookType: CreateLifyCycleHookResponseLifecycleHookTypeEnum | string): CreateLifyCycleHookResponse {
        this['lifecycle_hook_type'] = lifecycleHookType;
        return this;
    }
    public set lifecycleHookType(lifecycleHookType: CreateLifyCycleHookResponseLifecycleHookTypeEnum | string  | undefined) {
        this['lifecycle_hook_type'] = lifecycleHookType;
    }
    public get lifecycleHookType(): CreateLifyCycleHookResponseLifecycleHookTypeEnum | string | undefined {
        return this['lifecycle_hook_type'];
    }
    public withDefaultResult(defaultResult: CreateLifyCycleHookResponseDefaultResultEnum | string): CreateLifyCycleHookResponse {
        this['default_result'] = defaultResult;
        return this;
    }
    public set defaultResult(defaultResult: CreateLifyCycleHookResponseDefaultResultEnum | string  | undefined) {
        this['default_result'] = defaultResult;
    }
    public get defaultResult(): CreateLifyCycleHookResponseDefaultResultEnum | string | undefined {
        return this['default_result'];
    }
    public withDefaultTimeout(defaultTimeout: number): CreateLifyCycleHookResponse {
        this['default_timeout'] = defaultTimeout;
        return this;
    }
    public set defaultTimeout(defaultTimeout: number  | undefined) {
        this['default_timeout'] = defaultTimeout;
    }
    public get defaultTimeout(): number | undefined {
        return this['default_timeout'];
    }
    public withNotificationTopicUrn(notificationTopicUrn: string): CreateLifyCycleHookResponse {
        this['notification_topic_urn'] = notificationTopicUrn;
        return this;
    }
    public set notificationTopicUrn(notificationTopicUrn: string  | undefined) {
        this['notification_topic_urn'] = notificationTopicUrn;
    }
    public get notificationTopicUrn(): string | undefined {
        return this['notification_topic_urn'];
    }
    public withNotificationTopicName(notificationTopicName: string): CreateLifyCycleHookResponse {
        this['notification_topic_name'] = notificationTopicName;
        return this;
    }
    public set notificationTopicName(notificationTopicName: string  | undefined) {
        this['notification_topic_name'] = notificationTopicName;
    }
    public get notificationTopicName(): string | undefined {
        return this['notification_topic_name'];
    }
    public withNotificationMetadata(notificationMetadata: string): CreateLifyCycleHookResponse {
        this['notification_metadata'] = notificationMetadata;
        return this;
    }
    public set notificationMetadata(notificationMetadata: string  | undefined) {
        this['notification_metadata'] = notificationMetadata;
    }
    public get notificationMetadata(): string | undefined {
        return this['notification_metadata'];
    }
    public withCreateTime(createTime: string): CreateLifyCycleHookResponse {
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
export enum CreateLifyCycleHookResponseLifecycleHookTypeEnum {
    INSTANCE_TERMINATING = 'INSTANCE_TERMINATING',
    INSTANCE_LAUNCHING = 'INSTANCE_LAUNCHING'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateLifyCycleHookResponseDefaultResultEnum {
    ABANDON = 'ABANDON',
    CONTINUE = 'CONTINUE'
}
