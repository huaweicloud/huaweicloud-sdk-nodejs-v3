import { ApigCommodityOrder } from './ApigCommodityOrder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataArtsStudioInstancesResponse extends SdkResponse {
    private 'billing_check'?: boolean;
    public count?: number;
    private 'commodity_order_lists'?: Array<ApigCommodityOrder>;
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
    public withCommodityOrderLists(commodityOrderLists: Array<ApigCommodityOrder>): ListDataArtsStudioInstancesResponse {
        this['commodity_order_lists'] = commodityOrderLists;
        return this;
    }
    public set commodityOrderLists(commodityOrderLists: Array<ApigCommodityOrder>  | undefined) {
        this['commodity_order_lists'] = commodityOrderLists;
    }
    public get commodityOrderLists(): Array<ApigCommodityOrder> | undefined {
        return this['commodity_order_lists'];
    }
}