
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePeriodElasticResourcePoolSpecChangeOrderResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreatePeriodElasticResourcePoolSpecChangeOrderResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreatePeriodElasticResourcePoolSpecChangeOrderResponse {
        this['message'] = message;
        return this;
    }
    public withOrderId(orderId: string): CreatePeriodElasticResourcePoolSpecChangeOrderResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}