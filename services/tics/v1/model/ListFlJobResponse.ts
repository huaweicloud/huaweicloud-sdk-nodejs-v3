import { FlJobListVo } from './FlJobListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlJobResponse extends SdkResponse {
    public lists?: Array<FlJobListVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<FlJobListVo>): ListFlJobResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListFlJobResponse {
        this['total'] = total;
        return this;
    }
}