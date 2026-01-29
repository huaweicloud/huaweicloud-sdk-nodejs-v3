
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubscriptionOrderResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'order_status'?: UpdateSubscriptionOrderResponseOrderStatusEnum | number;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): UpdateSubscriptionOrderResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOrderStatus(orderStatus: UpdateSubscriptionOrderResponseOrderStatusEnum | number): UpdateSubscriptionOrderResponse {
        this['order_status'] = orderStatus;
        return this;
    }
    public set orderStatus(orderStatus: UpdateSubscriptionOrderResponseOrderStatusEnum | number  | undefined) {
        this['order_status'] = orderStatus;
    }
    public get orderStatus(): UpdateSubscriptionOrderResponseOrderStatusEnum | number | undefined {
        return this['order_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSubscriptionOrderResponseOrderStatusEnum {
    NUMBER_1 = 1,
    NUMBER_5 = 5
}
