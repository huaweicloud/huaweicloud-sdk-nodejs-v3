import { TaskRulesetInfo } from './TaskRulesetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTasksRulesetsResponse extends SdkResponse {
    public data?: Array<TaskRulesetInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<TaskRulesetInfo>): ShowTasksRulesetsResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ShowTasksRulesetsResponse {
        this['total'] = total;
        return this;
    }
}