import { DataClassificationRuleQueryDTO } from './DataClassificationRuleQueryDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDataClassificationRulesResponse extends SdkResponse {
    public content?: Array<DataClassificationRuleQueryDTO>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withContent(content: Array<DataClassificationRuleQueryDTO>): ListSecurityDataClassificationRulesResponse {
        this['content'] = content;
        return this;
    }
    public withTotal(total: number): ListSecurityDataClassificationRulesResponse {
        this['total'] = total;
        return this;
    }
}