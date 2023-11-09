import { TicsLeagueListVo } from './TicsLeagueListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLeaguesResponse extends SdkResponse {
    public lists?: Array<TicsLeagueListVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsLeagueListVo>): ListLeaguesResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListLeaguesResponse {
        this['total'] = total;
        return this;
    }
}