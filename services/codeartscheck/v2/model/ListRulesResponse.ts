import { RuleListItem } from './RuleListItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRulesResponse extends SdkResponse {
    public info?: Array<RuleListItem>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfo(info: Array<RuleListItem>): ListRulesResponse {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ListRulesResponse {
        this['total'] = total;
        return this;
    }
}