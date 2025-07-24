
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeShareChargeModeV2Response extends SdkResponse {
    private 'order_ids'?: Array<string>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withOrderIds(orderIds: Array<string>): ChangeShareChargeModeV2Response {
        this['order_ids'] = orderIds;
        return this;
    }
    public set orderIds(orderIds: Array<string>  | undefined) {
        this['order_ids'] = orderIds;
    }
    public get orderIds(): Array<string> | undefined {
        return this['order_ids'];
    }
    public withXRequestId(xRequestId: string): ChangeShareChargeModeV2Response {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}