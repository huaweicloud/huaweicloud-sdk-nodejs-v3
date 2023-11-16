import { RuleSet } from './RuleSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStrategyResponse extends SdkResponse {
    public data?: Array<RuleSet>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<RuleSet>): ListStrategyResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListStrategyResponse {
        this['total'] = total;
        return this;
    }
}