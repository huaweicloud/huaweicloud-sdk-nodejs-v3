import { CipherInfo } from './CipherInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalConfigResponse extends SdkResponse {
    private 'support_tls'?: Array<string>;
    public cipher?: Array<CipherInfo>;
    public constructor() { 
        super();
    }
    public withSupportTls(supportTls: Array<string>): ListGlobalConfigResponse {
        this['support_tls'] = supportTls;
        return this;
    }
    public set supportTls(supportTls: Array<string>  | undefined) {
        this['support_tls'] = supportTls;
    }
    public get supportTls(): Array<string> | undefined {
        return this['support_tls'];
    }
    public withCipher(cipher: Array<CipherInfo>): ListGlobalConfigResponse {
        this['cipher'] = cipher;
        return this;
    }
}