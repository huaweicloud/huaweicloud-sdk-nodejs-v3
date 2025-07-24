import { TaskCheckParamters } from './TaskCheckParamters';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckRulesetParametersResponse extends SdkResponse {
    public data?: Array<TaskCheckParamters>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<TaskCheckParamters>): CheckRulesetParametersResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): CheckRulesetParametersResponse {
        this['total'] = total;
        return this;
    }
}