

export class LiveEventCallBackConfig {
    private 'live_event_type_callback_url'?: string;
    private 'auth_type'?: LiveEventCallBackConfigAuthTypeEnum | string;
    public key?: string;
    private 'callback_event_type'?: Array<string>;
    public constructor() { 
    }
    public withLiveEventTypeCallbackUrl(liveEventTypeCallbackUrl: string): LiveEventCallBackConfig {
        this['live_event_type_callback_url'] = liveEventTypeCallbackUrl;
        return this;
    }
    public set liveEventTypeCallbackUrl(liveEventTypeCallbackUrl: string  | undefined) {
        this['live_event_type_callback_url'] = liveEventTypeCallbackUrl;
    }
    public get liveEventTypeCallbackUrl(): string | undefined {
        return this['live_event_type_callback_url'];
    }
    public withAuthType(authType: LiveEventCallBackConfigAuthTypeEnum | string): LiveEventCallBackConfig {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: LiveEventCallBackConfigAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): LiveEventCallBackConfigAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withKey(key: string): LiveEventCallBackConfig {
        this['key'] = key;
        return this;
    }
    public withCallbackEventType(callbackEventType: Array<string>): LiveEventCallBackConfig {
        this['callback_event_type'] = callbackEventType;
        return this;
    }
    public set callbackEventType(callbackEventType: Array<string>  | undefined) {
        this['callback_event_type'] = callbackEventType;
    }
    public get callbackEventType(): Array<string> | undefined {
        return this['callback_event_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveEventCallBackConfigAuthTypeEnum {
    NONE = 'NONE',
    MSS_A = 'MSS_A'
}
