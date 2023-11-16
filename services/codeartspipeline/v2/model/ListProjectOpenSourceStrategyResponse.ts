import { SimpleOpenSourceRuleSetVO } from './SimpleOpenSourceRuleSetVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectOpenSourceStrategyResponse extends SdkResponse {
    public total?: number;
    public data?: Array<SimpleOpenSourceRuleSetVO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListProjectOpenSourceStrategyResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<SimpleOpenSourceRuleSetVO>): ListProjectOpenSourceStrategyResponse {
        this['data'] = data;
        return this;
    }
}