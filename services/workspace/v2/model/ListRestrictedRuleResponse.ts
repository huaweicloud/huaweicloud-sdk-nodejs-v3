import { AppRule } from './AppRule';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestrictedRuleResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppRule>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListRestrictedRuleResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppRule>): ListRestrictedRuleResponse {
        this['items'] = items;
        return this;
    }
}