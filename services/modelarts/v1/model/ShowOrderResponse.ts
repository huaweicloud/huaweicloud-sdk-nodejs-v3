import { OrderDetailItem } from './OrderDetailItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrderResponse extends SdkResponse {
    public count?: number;
    public items?: Array<OrderDetailItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowOrderResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<OrderDetailItem>): ShowOrderResponse {
        this['items'] = items;
        return this;
    }
}