import { OrderV5 } from './OrderV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesktopPoolChangeOrderResponse extends SdkResponse {
    public orders?: Array<OrderV5>;
    public constructor() { 
        super();
    }
    public withOrders(orders: Array<OrderV5>): CreateDesktopPoolChangeOrderResponse {
        this['orders'] = orders;
        return this;
    }
}