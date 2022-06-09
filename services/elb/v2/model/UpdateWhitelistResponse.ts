import { WhitelistResp } from './WhitelistResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWhitelistResponse extends SdkResponse {
    public whitelist?: WhitelistResp;
    public constructor() { 
        super();
    }
    public withWhitelist(whitelist: WhitelistResp): UpdateWhitelistResponse {
        this['whitelist'] = whitelist;
        return this;
    }
}