

export class RecordCallbackConfigRequest {
    private 'publish_domain'?: string;
    public app?: string;
    private 'notify_callback_url'?: string;
    private 'notify_event_subscription'?: Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum> | Array<string>;
    private 'sign_type'?: RecordCallbackConfigRequestSignTypeEnum | string;
    public key?: string;
    public constructor(publishDomain?: string, app?: string) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
    }
    public withPublishDomain(publishDomain: string): RecordCallbackConfigRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): RecordCallbackConfigRequest {
        this['app'] = app;
        return this;
    }
    public withNotifyCallbackUrl(notifyCallbackUrl: string): RecordCallbackConfigRequest {
        this['notify_callback_url'] = notifyCallbackUrl;
        return this;
    }
    public set notifyCallbackUrl(notifyCallbackUrl: string  | undefined) {
        this['notify_callback_url'] = notifyCallbackUrl;
    }
    public get notifyCallbackUrl(): string | undefined {
        return this['notify_callback_url'];
    }
    public withNotifyEventSubscription(notifyEventSubscription: Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum> | Array<string>): RecordCallbackConfigRequest {
        this['notify_event_subscription'] = notifyEventSubscription;
        return this;
    }
    public set notifyEventSubscription(notifyEventSubscription: Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum> | Array<string>  | undefined) {
        this['notify_event_subscription'] = notifyEventSubscription;
    }
    public get notifyEventSubscription(): Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum> | Array<string> | undefined {
        return this['notify_event_subscription'];
    }
    public withSignType(signType: RecordCallbackConfigRequestSignTypeEnum | string): RecordCallbackConfigRequest {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: RecordCallbackConfigRequestSignTypeEnum | string  | undefined) {
        this['sign_type'] = signType;
    }
    public get signType(): RecordCallbackConfigRequestSignTypeEnum | string | undefined {
        return this['sign_type'];
    }
    public withKey(key: string): RecordCallbackConfigRequest {
        this['key'] = key;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordCallbackConfigRequestNotifyEventSubscriptionEnum {
    RECORD_NEW_FILE_START = 'RECORD_NEW_FILE_START',
    RECORD_FILE_COMPLETE = 'RECORD_FILE_COMPLETE',
    RECORD_OVER = 'RECORD_OVER',
    RECORD_FAILED = 'RECORD_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum RecordCallbackConfigRequestSignTypeEnum {
    MD5 = 'MD5',
    HMACSHA256 = 'HMACSHA256'
}
