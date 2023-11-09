import { TicsSqlJobVo } from './TicsSqlJobVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlJobResponse extends SdkResponse {
    public lists?: Array<TicsSqlJobVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsSqlJobVo>): ListSqlJobResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListSqlJobResponse {
        this['total'] = total;
        return this;
    }
}