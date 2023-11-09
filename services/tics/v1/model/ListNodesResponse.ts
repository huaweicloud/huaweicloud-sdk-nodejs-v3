import { TicsTrustInfoVo } from './TicsTrustInfoVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodesResponse extends SdkResponse {
    public lists?: Array<TicsTrustInfoVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsTrustInfoVo>): ListNodesResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListNodesResponse {
        this['total'] = total;
        return this;
    }
}