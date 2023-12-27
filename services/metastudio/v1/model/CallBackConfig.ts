

export class CallBackConfig {
    private 'callback_url'?: string;
    private 'auth_type'?: CallBackConfigAuthTypeEnum | string;
    public key?: string;
    public constructor(callbackUrl?: string) { 
        this['callback_url'] = callbackUrl;
    }
    public withCallbackUrl(callbackUrl: string): CallBackConfig {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withAuthType(authType: CallBackConfigAuthTypeEnum | string): CallBackConfig {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: CallBackConfigAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): CallBackConfigAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withKey(key: string): CallBackConfig {
        this['key'] = key;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CallBackConfigAuthTypeEnum {
    NONE = 'NONE',
    MSS_A = 'MSS_A'
}
