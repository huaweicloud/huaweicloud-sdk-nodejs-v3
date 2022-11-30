import { WhitelistResp } from './WhitelistResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWhitelistsResponse extends SdkResponse {
    public whitelists?: Array<WhitelistResp>;
    public constructor() { 
        super();
    }
    public withWhitelists(whitelists: Array<WhitelistResp>): ListWhitelistsResponse {
        this['whitelists'] = whitelists;
        return this;
    }
}