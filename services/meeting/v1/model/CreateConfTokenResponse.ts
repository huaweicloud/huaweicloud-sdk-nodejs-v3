import { TokenInfo } from './TokenInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfTokenResponse extends SdkResponse {
    public data?: TokenInfo;
    public addressToken?: string;
    public gloablPublicIP?: string;
    public constructor() { 
        super();
    }
    public withData(data: TokenInfo): CreateConfTokenResponse {
        this['data'] = data;
        return this;
    }
    public withAddressToken(addressToken: string): CreateConfTokenResponse {
        this['addressToken'] = addressToken;
        return this;
    }
    public withGloablPublicIP(gloablPublicIP: string): CreateConfTokenResponse {
        this['gloablPublicIP'] = gloablPublicIP;
        return this;
    }
}