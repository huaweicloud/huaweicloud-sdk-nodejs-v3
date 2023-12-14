

export class CallbackUrl {
    public url?: string;
    private 'auth_sign_key'?: string;
    private 'call_back_area'?: CallbackUrlCallBackAreaEnum | string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): CallbackUrl {
        this['url'] = url;
        return this;
    }
    public withAuthSignKey(authSignKey: string): CallbackUrl {
        this['auth_sign_key'] = authSignKey;
        return this;
    }
    public set authSignKey(authSignKey: string  | undefined) {
        this['auth_sign_key'] = authSignKey;
    }
    public get authSignKey(): string | undefined {
        return this['auth_sign_key'];
    }
    public withCallBackArea(callBackArea: CallbackUrlCallBackAreaEnum | string): CallbackUrl {
        this['call_back_area'] = callBackArea;
        return this;
    }
    public set callBackArea(callBackArea: CallbackUrlCallBackAreaEnum | string  | undefined) {
        this['call_back_area'] = callBackArea;
    }
    public get callBackArea(): CallbackUrlCallBackAreaEnum | string | undefined {
        return this['call_back_area'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CallbackUrlCallBackAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
