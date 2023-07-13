

export class RecordCallbackConfigRequest {
    private 'publish_domain': string | undefined;
    public app: string;
    private 'notify_callback_url'?: string | undefined;
    private 'notify_event_subscription'?: Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum> | undefined;
    private 'sign_type'?: RecordCallbackConfigRequestSignTypeEnum | undefined;
    public key?: string;
    public constructor(publishDomain?: any, app?: any) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
    }
    public withPublishDomain(publishDomain: string): RecordCallbackConfigRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
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
    public set notifyCallbackUrl(notifyCallbackUrl: string | undefined) {
        this['notify_callback_url'] = notifyCallbackUrl;
    }
    public get notifyCallbackUrl() {
        return this['notify_callback_url'];
    }
    public withNotifyEventSubscription(notifyEventSubscription: Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum>): RecordCallbackConfigRequest {
        this['notify_event_subscription'] = notifyEventSubscription;
        return this;
    }
    public set notifyEventSubscription(notifyEventSubscription: Array<RecordCallbackConfigRequestNotifyEventSubscriptionEnum> | undefined) {
        this['notify_event_subscription'] = notifyEventSubscription;
    }
    public get notifyEventSubscription() {
        return this['notify_event_subscription'];
    }
    public withSignType(signType: RecordCallbackConfigRequestSignTypeEnum): RecordCallbackConfigRequest {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: RecordCallbackConfigRequestSignTypeEnum | undefined) {
        this['sign_type'] = signType;
    }
    public get signType() {
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
