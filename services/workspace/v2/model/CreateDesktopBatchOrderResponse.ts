import { OrderV5 } from './OrderV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesktopBatchOrderResponse extends SdkResponse {
    public orders?: Array<OrderV5>;
    public constructor() { 
        super();
    }
    public withOrders(orders: Array<OrderV5>): CreateDesktopBatchOrderResponse {
        this['orders'] = orders;
        return this;
    }
}