import { PartnerDataVo } from './PartnerDataVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLeagueDatasetsResponse extends SdkResponse {
    public lists?: Array<PartnerDataVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<PartnerDataVo>): ListLeagueDatasetsResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListLeagueDatasetsResponse {
        this['total'] = total;
        return this;
    }
}