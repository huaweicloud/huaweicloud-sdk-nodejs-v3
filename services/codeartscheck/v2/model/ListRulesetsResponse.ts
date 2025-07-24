import { RulesetItem } from './RulesetItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRulesetsResponse extends SdkResponse {
    public info?: Array<RulesetItem>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfo(info: Array<RulesetItem>): ListRulesetsResponse {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ListRulesetsResponse {
        this['total'] = total;
        return this;
    }
}