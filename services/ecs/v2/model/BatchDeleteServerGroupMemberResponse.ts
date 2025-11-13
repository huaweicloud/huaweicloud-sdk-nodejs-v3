import { BatchOperateResultResponse } from './BatchOperateResultResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteServerGroupMemberResponse extends SdkResponse {
    public status?: string;
    public servers?: Array<BatchOperateResultResponse>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchDeleteServerGroupMemberResponse {
        this['status'] = status;
        return this;
    }
    public withServers(servers: Array<BatchOperateResultResponse>): BatchDeleteServerGroupMemberResponse {
        this['servers'] = servers;
        return this;
    }
}