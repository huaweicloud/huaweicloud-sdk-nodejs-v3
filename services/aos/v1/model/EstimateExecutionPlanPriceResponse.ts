import { ItemsResponse } from './ItemsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EstimateExecutionPlanPriceResponse extends SdkResponse {
    public currency?: string;
    public items?: Array<ItemsResponse>;
    public constructor() { 
        super();
    }
    public withCurrency(currency: string): EstimateExecutionPlanPriceResponse {
        this['currency'] = currency;
        return this;
    }
    public withItems(items: Array<ItemsResponse>): EstimateExecutionPlanPriceResponse {
        this['items'] = items;
        return this;
    }
}