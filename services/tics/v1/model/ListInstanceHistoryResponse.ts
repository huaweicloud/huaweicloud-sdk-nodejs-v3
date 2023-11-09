import { TicsJobInstanceVo } from './TicsJobInstanceVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceHistoryResponse extends SdkResponse {
    public lists?: Array<TicsJobInstanceVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsJobInstanceVo>): ListInstanceHistoryResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListInstanceHistoryResponse {
        this['total'] = total;
        return this;
    }
}