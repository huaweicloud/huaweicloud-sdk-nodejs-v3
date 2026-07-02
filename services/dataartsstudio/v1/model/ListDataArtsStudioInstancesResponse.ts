import { ApigCommodityOrder } from './ApigCommodityOrder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataArtsStudioInstancesResponse extends SdkResponse {
    private 'billing_check'?: boolean;
    public count?: number;
    private 'commodity_orders'?: Array<ApigCommodityOrder>;
    public constructor() { 
        super();
    }
    public withBillingCheck(billingCheck: boolean): ListDataArtsStudioInstancesResponse {
        this['billing_check'] = billingCheck;
        return this;
    }
    public set billingCheck(billingCheck: boolean  | undefined) {
        this['billing_check'] = billingCheck;
    }
    public get billingCheck(): boolean | undefined {
        return this['billing_check'];
    }
    public withCount(count: number): ListDataArtsStudioInstancesResponse {
        this['count'] = count;
        return this;
    }
    public withCommodityOrders(commodityOrders: Array<ApigCommodityOrder>): ListDataArtsStudioInstancesResponse {
        this['commodity_orders'] = commodityOrders;
        return this;
    }
    public set commodityOrders(commodityOrders: Array<ApigCommodityOrder>  | undefined) {
        this['commodity_orders'] = commodityOrders;
    }
    public get commodityOrders(): Array<ApigCommodityOrder> | undefined {
        return this['commodity_orders'];
    }
}