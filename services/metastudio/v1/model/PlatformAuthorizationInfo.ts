

export class PlatformAuthorizationInfo {
    private 'authorize_state'?: PlatformAuthorizationInfoAuthorizeStateEnum | string;
    private 'authorized_time'?: string;
    private 'expire_time'?: string;
    public account?: string;
    public constructor() { 
    }
    public withAuthorizeState(authorizeState: PlatformAuthorizationInfoAuthorizeStateEnum | string): PlatformAuthorizationInfo {
        this['authorize_state'] = authorizeState;
        return this;
    }
    public set authorizeState(authorizeState: PlatformAuthorizationInfoAuthorizeStateEnum | string  | undefined) {
        this['authorize_state'] = authorizeState;
    }
    public get authorizeState(): PlatformAuthorizationInfoAuthorizeStateEnum | string | undefined {
        return this['authorize_state'];
    }
    public withAuthorizedTime(authorizedTime: string): PlatformAuthorizationInfo {
        this['authorized_time'] = authorizedTime;
        return this;
    }
    public set authorizedTime(authorizedTime: string  | undefined) {
        this['authorized_time'] = authorizedTime;
    }
    public get authorizedTime(): string | undefined {
        return this['authorized_time'];
    }
    public withExpireTime(expireTime: string): PlatformAuthorizationInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withAccount(account: string): PlatformAuthorizationInfo {
        this['account'] = account;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PlatformAuthorizationInfoAuthorizeStateEnum {
    AUTHORIZED = 'AUTHORIZED',
    UNAUTHORIZED = 'UNAUTHORIZED'
}
