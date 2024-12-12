import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';


export class LiveRoomEventCallBackConfig {
    private 'live_event_type_callback_url'?: string;
    private 'auth_type'?: LiveRoomEventCallBackConfigAuthTypeEnum | string;
    public key?: string;
    private 'callback_event_type'?: Array<string>;
    private 'is_inheritance_platform_callback'?: boolean;
    public constructor() { 
    }
    public withLiveEventTypeCallbackUrl(liveEventTypeCallbackUrl: string): LiveRoomEventCallBackConfig {
        this['live_event_type_callback_url'] = liveEventTypeCallbackUrl;
        return this;
    }
    public set liveEventTypeCallbackUrl(liveEventTypeCallbackUrl: string  | undefined) {
        this['live_event_type_callback_url'] = liveEventTypeCallbackUrl;
    }
    public get liveEventTypeCallbackUrl(): string | undefined {
        return this['live_event_type_callback_url'];
    }
    public withAuthType(authType: LiveRoomEventCallBackConfigAuthTypeEnum | string): LiveRoomEventCallBackConfig {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: LiveRoomEventCallBackConfigAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): LiveRoomEventCallBackConfigAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withKey(key: string): LiveRoomEventCallBackConfig {
        this['key'] = key;
        return this;
    }
    public withCallbackEventType(callbackEventType: Array<string>): LiveRoomEventCallBackConfig {
        this['callback_event_type'] = callbackEventType;
        return this;
    }
    public set callbackEventType(callbackEventType: Array<string>  | undefined) {
        this['callback_event_type'] = callbackEventType;
    }
    public get callbackEventType(): Array<string> | undefined {
        return this['callback_event_type'];
    }
    public withIsInheritancePlatformCallback(isInheritancePlatformCallback: boolean): LiveRoomEventCallBackConfig {
        this['is_inheritance_platform_callback'] = isInheritancePlatformCallback;
        return this;
    }
    public set isInheritancePlatformCallback(isInheritancePlatformCallback: boolean  | undefined) {
        this['is_inheritance_platform_callback'] = isInheritancePlatformCallback;
    }
    public get isInheritancePlatformCallback(): boolean | undefined {
        return this['is_inheritance_platform_callback'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveRoomEventCallBackConfigAuthTypeEnum {
    NONE = 'NONE',
    MSS_A = 'MSS_A',
    MSS_A_HEAD = 'MSS_A_HEAD',
    MEITUAN_DEFAULT = 'MEITUAN_DEFAULT'
}
