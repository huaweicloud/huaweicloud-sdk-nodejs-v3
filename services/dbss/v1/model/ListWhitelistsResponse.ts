import { WhitelistBean } from './WhitelistBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWhitelistsResponse extends SdkResponse {
    public total?: number;
    public whitelists?: Array<WhitelistBean>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWhitelistsResponse {
        this['total'] = total;
        return this;
    }
    public withWhitelists(whitelists: Array<WhitelistBean>): ListWhitelistsResponse {
        this['whitelists'] = whitelists;
        return this;
    }
}