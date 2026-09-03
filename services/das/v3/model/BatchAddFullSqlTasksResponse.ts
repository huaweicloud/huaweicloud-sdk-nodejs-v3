
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAddFullSqlTasksResponse extends SdkResponse {
    public ids?: Array<number>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIds(ids: Array<number>): BatchAddFullSqlTasksResponse {
        this['ids'] = ids;
        return this;
    }
    public withTotal(total: number): BatchAddFullSqlTasksResponse {
        this['total'] = total;
        return this;
    }
}