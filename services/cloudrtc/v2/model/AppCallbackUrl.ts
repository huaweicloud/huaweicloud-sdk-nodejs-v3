

export class AppCallbackUrl {
    public url?: string;
    private 'auth_key'?: string;
    private 'notify_event_subscription'?: Array<AppCallbackUrlNotifyEventSubscriptionEnum> | Array<string>;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withUrl(url: string): AppCallbackUrl {
        this['url'] = url;
        return this;
    }
    public withAuthKey(authKey: string): AppCallbackUrl {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string  | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey(): string | undefined {
        return this['auth_key'];
    }
    public withNotifyEventSubscription(notifyEventSubscription: Array<AppCallbackUrlNotifyEventSubscriptionEnum> | Array<string>): AppCallbackUrl {
        this['notify_event_subscription'] = notifyEventSubscription;
        return this;
    }
    public set notifyEventSubscription(notifyEventSubscription: Array<AppCallbackUrlNotifyEventSubscriptionEnum> | Array<string>  | undefined) {
        this['notify_event_subscription'] = notifyEventSubscription;
    }
    public get notifyEventSubscription(): Array<AppCallbackUrlNotifyEventSubscriptionEnum> | Array<string> | undefined {
        return this['notify_event_subscription'];
    }
    public withUpdateTime(updateTime: string): AppCallbackUrl {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppCallbackUrlNotifyEventSubscriptionEnum {
    RECORD_NEW_FILE_START = 'RECORD_NEW_FILE_START',
    RECORD_FILE_COMPLETE = 'RECORD_FILE_COMPLETE'
}
