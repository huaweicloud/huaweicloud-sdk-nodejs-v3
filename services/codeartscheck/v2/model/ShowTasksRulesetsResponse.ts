import { TaskRulesetInfo } from './TaskRulesetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTasksRulesetsResponse extends SdkResponse {
    public info?: Array<TaskRulesetInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfo(info: Array<TaskRulesetInfo>): ShowTasksRulesetsResponse {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ShowTasksRulesetsResponse {
        this['total'] = total;
        return this;
    }
}