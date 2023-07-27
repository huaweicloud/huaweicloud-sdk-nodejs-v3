

export class AuthOpt {
    private 'app_code_auth_type'?: AuthOptAppCodeAuthTypeEnum | string;
    public constructor() { 
    }
    public withAppCodeAuthType(appCodeAuthType: AuthOptAppCodeAuthTypeEnum | string): AuthOpt {
        this['app_code_auth_type'] = appCodeAuthType;
        return this;
    }
    public set appCodeAuthType(appCodeAuthType: AuthOptAppCodeAuthTypeEnum | string  | undefined) {
        this['app_code_auth_type'] = appCodeAuthType;
    }
    public get appCodeAuthType(): AuthOptAppCodeAuthTypeEnum | string | undefined {
        return this['app_code_auth_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthOptAppCodeAuthTypeEnum {
    DISABLE = 'DISABLE',
    HEADER = 'HEADER'
}
