import { TaskRulesetInfo } from './TaskRulesetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskRulesetResponse extends SdkResponse {
    public body?: Array<TaskRulesetInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TaskRulesetInfo>): ListTaskRulesetResponse {
        this['body'] = body;
        return this;
    }
}