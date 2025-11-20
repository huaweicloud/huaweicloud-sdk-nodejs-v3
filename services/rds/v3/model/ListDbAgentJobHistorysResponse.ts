import { ListDbAgentJobHistorysResult } from './ListDbAgentJobHistorysResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbAgentJobHistorysResponse extends SdkResponse {
    public historys?: Array<ListDbAgentJobHistorysResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHistorys(historys: Array<ListDbAgentJobHistorysResult>): ListDbAgentJobHistorysResponse {
        this['historys'] = historys;
        return this;
    }
    public withTotalCount(totalCount: number): ListDbAgentJobHistorysResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}