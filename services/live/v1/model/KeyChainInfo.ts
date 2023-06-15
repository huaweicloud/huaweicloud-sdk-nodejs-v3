

export class KeyChainInfo {
    public key: string;
    private 'auth_type': KeyChainInfoAuthTypeEnum | undefined;
    public timeout: number;
    public constructor(key?: any, authType?: any, timeout?: any) { 
        this['key'] = key;
        this['auth_type'] = authType;
        this['timeout'] = timeout;
    }
    public withKey(key: string): KeyChainInfo {
        this['key'] = key;
        return this;
    }
    public withAuthType(authType: KeyChainInfoAuthTypeEnum): KeyChainInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: KeyChainInfoAuthTypeEnum | undefined) {
        this['auth_type'] = authType;
    }
    public get authType() {
        return this['auth_type'];
    }
    public withTimeout(timeout: number): KeyChainInfo {
        this['timeout'] = timeout;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeyChainInfoAuthTypeEnum {
    D_SHA256 = 'd_sha256',
    C_AES = 'c_aes',
    B_MD5 = 'b_md5',
    A_MD5 = 'a_md5'
}
