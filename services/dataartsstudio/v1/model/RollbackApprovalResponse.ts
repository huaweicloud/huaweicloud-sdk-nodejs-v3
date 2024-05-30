import { RollbackApprovalResultData } from './RollbackApprovalResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RollbackApprovalResponse extends SdkResponse {
    public data?: RollbackApprovalResultData;
    public constructor() { 
        super();
    }
    public withData(data: RollbackApprovalResultData): RollbackApprovalResponse {
        this['data'] = data;
        return this;
    }
}