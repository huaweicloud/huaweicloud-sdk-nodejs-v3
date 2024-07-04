import { ExchangeDetails } from './ExchangeDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExchangesResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public items?: Array<ExchangeDetails>;
    public constructor() { 
        super();
    }
    public withSize(size: number): ListExchangesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListExchangesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ExchangeDetails>): ListExchangesResponse {
        this['items'] = items;
        return this;
    }
}