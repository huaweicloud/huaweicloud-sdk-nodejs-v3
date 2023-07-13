
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeServerChargeModeResponse extends SdkResponse {
    private 'order_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): ChangeServerChargeModeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
}