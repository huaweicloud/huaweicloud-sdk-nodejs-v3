import { AppRule } from './AppRule';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppRuleResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppRule>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppRuleResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppRule>): ListAppRuleResponse {
        this['items'] = items;
        return this;
    }
}