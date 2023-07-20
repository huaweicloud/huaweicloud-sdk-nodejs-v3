
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainKeyChainResponse extends SdkResponse {
    public key?: string;
    private 'auth_type'?: ShowDomainKeyChainResponseAuthTypeEnum | string;
    public timeout?: number;
    public constructor() { 
        super();
    }
    public withKey(key: string): ShowDomainKeyChainResponse {
        this['key'] = key;
        return this;
    }
    public withAuthType(authType: ShowDomainKeyChainResponseAuthTypeEnum | string): ShowDomainKeyChainResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ShowDomainKeyChainResponseAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ShowDomainKeyChainResponseAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withTimeout(timeout: number): ShowDomainKeyChainResponse {
        this['timeout'] = timeout;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainKeyChainResponseAuthTypeEnum {
    D_SHA256 = 'd_sha256',
    C_AES = 'c_aes',
    B_MD5 = 'b_md5',
    A_MD5 = 'a_md5'
}
