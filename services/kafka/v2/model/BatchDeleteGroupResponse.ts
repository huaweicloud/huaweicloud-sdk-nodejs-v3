import { BatchDeleteGroupRespFailedGroups } from './BatchDeleteGroupRespFailedGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteGroupResponse extends SdkResponse {
    private 'failed_groups'?: Array<BatchDeleteGroupRespFailedGroups>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFailedGroups(failedGroups: Array<BatchDeleteGroupRespFailedGroups>): BatchDeleteGroupResponse {
        this['failed_groups'] = failedGroups;
        return this;
    }
    public set failedGroups(failedGroups: Array<BatchDeleteGroupRespFailedGroups>  | undefined) {
        this['failed_groups'] = failedGroups;
    }
    public get failedGroups(): Array<BatchDeleteGroupRespFailedGroups> | undefined {
        return this['failed_groups'];
    }
    public withTotal(total: number): BatchDeleteGroupResponse {
        this['total'] = total;
        return this;
    }
}