import { TicsLeaguePartnerVo } from './TicsLeaguePartnerVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPartnersResponse extends SdkResponse {
    public lists?: Array<TicsLeaguePartnerVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsLeaguePartnerVo>): ListPartnersResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListPartnersResponse {
        this['total'] = total;
        return this;
    }
}