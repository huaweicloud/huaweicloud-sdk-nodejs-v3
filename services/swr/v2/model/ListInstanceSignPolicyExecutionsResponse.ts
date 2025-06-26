import { Execution } from './Execution';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSignPolicyExecutionsResponse extends SdkResponse {
    public executions?: Array<Execution>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withExecutions(executions: Array<Execution>): ListInstanceSignPolicyExecutionsResponse {
        this['executions'] = executions;
        return this;
    }
    public withTotal(total: number): ListInstanceSignPolicyExecutionsResponse {
        this['total'] = total;
        return this;
    }
}