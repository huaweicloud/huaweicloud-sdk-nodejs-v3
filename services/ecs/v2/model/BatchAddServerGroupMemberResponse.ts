import { BatchOperateResultResponse } from './BatchOperateResultResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAddServerGroupMemberResponse extends SdkResponse {
    public status?: string;
    public servers?: Array<BatchOperateResultResponse>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchAddServerGroupMemberResponse {
        this['status'] = status;
        return this;
    }
    public withServers(servers: Array<BatchOperateResultResponse>): BatchAddServerGroupMemberResponse {
        this['servers'] = servers;
        return this;
    }
}