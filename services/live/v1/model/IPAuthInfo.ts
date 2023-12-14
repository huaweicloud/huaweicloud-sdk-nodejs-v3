

export class IPAuthInfo {
    public domain?: string;
    private 'auth_type'?: IPAuthInfoAuthTypeEnum | string;
    private 'ip_auth_list'?: string;
    public constructor(domain?: string, authType?: string, ipAuthList?: string) { 
        this['domain'] = domain;
        this['auth_type'] = authType;
        this['ip_auth_list'] = ipAuthList;
    }
    public withDomain(domain: string): IPAuthInfo {
        this['domain'] = domain;
        return this;
    }
    public withAuthType(authType: IPAuthInfoAuthTypeEnum | string): IPAuthInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: IPAuthInfoAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): IPAuthInfoAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withIpAuthList(ipAuthList: string): IPAuthInfo {
        this['ip_auth_list'] = ipAuthList;
        return this;
    }
    public set ipAuthList(ipAuthList: string  | undefined) {
        this['ip_auth_list'] = ipAuthList;
    }
    public get ipAuthList(): string | undefined {
        return this['ip_auth_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IPAuthInfoAuthTypeEnum {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
    NONE = 'NONE'
}
