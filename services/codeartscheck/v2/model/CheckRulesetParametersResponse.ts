import { TaskCheckParameters } from './TaskCheckParameters';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckRulesetParametersResponse extends SdkResponse {
    public data?: Array<TaskCheckParameters>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<TaskCheckParameters>): CheckRulesetParametersResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): CheckRulesetParametersResponse {
        this['total'] = total;
        return this;
    }
}