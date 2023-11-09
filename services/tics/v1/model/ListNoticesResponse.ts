import { TicsApproveLogVo } from './TicsApproveLogVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNoticesResponse extends SdkResponse {
    public lists?: Array<TicsApproveLogVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsApproveLogVo>): ListNoticesResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListNoticesResponse {
        this['total'] = total;
        return this;
    }
}