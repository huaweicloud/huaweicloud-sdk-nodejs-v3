import { SimpleOpenSourceRuleSetVO } from './SimpleOpenSourceRuleSetVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOpenSourceStrategyResponse extends SdkResponse {
    public total?: number;
    public data?: Array<SimpleOpenSourceRuleSetVO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListOpenSourceStrategyResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<SimpleOpenSourceRuleSetVO>): ListOpenSourceStrategyResponse {
        this['data'] = data;
        return this;
    }
}