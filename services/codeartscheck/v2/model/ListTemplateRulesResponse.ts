import { RuleItem } from './RuleItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateRulesResponse extends SdkResponse {
    public info?: Array<RuleItem>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfo(info: Array<RuleItem>): ListTemplateRulesResponse {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ListTemplateRulesResponse {
        this['total'] = total;
        return this;
    }
}