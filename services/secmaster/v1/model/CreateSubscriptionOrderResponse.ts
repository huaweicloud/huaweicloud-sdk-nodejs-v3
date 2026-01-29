
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSubscriptionOrderResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'order_status'?: CreateSubscriptionOrderResponseOrderStatusEnum | number;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateSubscriptionOrderResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOrderStatus(orderStatus: CreateSubscriptionOrderResponseOrderStatusEnum | number): CreateSubscriptionOrderResponse {
        this['order_status'] = orderStatus;
        return this;
    }
    public set orderStatus(orderStatus: CreateSubscriptionOrderResponseOrderStatusEnum | number  | undefined) {
        this['order_status'] = orderStatus;
    }
    public get orderStatus(): CreateSubscriptionOrderResponseOrderStatusEnum | number | undefined {
        return this['order_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSubscriptionOrderResponseOrderStatusEnum {
    NUMBER_1 = 1,
    NUMBER_5 = 5
}
