import { RetentionExecution } from './RetentionExecution';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceRetentionPolicyExecutionsResponse extends SdkResponse {
    public total?: number;
    public executions?: Array<RetentionExecution>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceRetentionPolicyExecutionsResponse {
        this['total'] = total;
        return this;
    }
    public withExecutions(executions: Array<RetentionExecution>): ListInstanceRetentionPolicyExecutionsResponse {
        this['executions'] = executions;
        return this;
    }
}