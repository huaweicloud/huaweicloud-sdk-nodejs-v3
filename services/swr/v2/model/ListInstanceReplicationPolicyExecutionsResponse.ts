import { Execution } from './Execution';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceReplicationPolicyExecutionsResponse extends SdkResponse {
    public executions?: Array<Execution>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withExecutions(executions: Array<Execution>): ListInstanceReplicationPolicyExecutionsResponse {
        this['executions'] = executions;
        return this;
    }
    public withTotal(total: number): ListInstanceReplicationPolicyExecutionsResponse {
        this['total'] = total;
        return this;
    }
}