import { WhitelistResp } from './WhitelistResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWhitelistResponse extends SdkResponse {
    public whitelist?: WhitelistResp;
    public constructor() { 
        super();
    }
    public withWhitelist(whitelist: WhitelistResp): ShowWhitelistResponse {
        this['whitelist'] = whitelist;
        return this;
    }
}