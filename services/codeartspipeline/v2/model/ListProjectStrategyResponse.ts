import { RuleSet } from './RuleSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectStrategyResponse extends SdkResponse {
    public data?: Array<RuleSet>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<RuleSet>): ListProjectStrategyResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListProjectStrategyResponse {
        this['total'] = total;
        return this;
    }
}