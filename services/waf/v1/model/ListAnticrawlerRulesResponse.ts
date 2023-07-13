import { AnticrawlerRule } from './AnticrawlerRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAnticrawlerRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AnticrawlerRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAnticrawlerRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AnticrawlerRule>): ListAnticrawlerRulesResponse {
        this['items'] = items;
        return this;
    }
}