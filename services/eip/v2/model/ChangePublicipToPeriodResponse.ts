
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangePublicipToPeriodResponse extends SdkResponse {
    private 'publicip_ids'?: Array<string>;
    private 'order_id'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPublicipIds(publicipIds: Array<string>): ChangePublicipToPeriodResponse {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string>  | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds(): Array<string> | undefined {
        return this['publicip_ids'];
    }
    public withOrderId(orderId: string): ChangePublicipToPeriodResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withRequestId(requestId: string): ChangePublicipToPeriodResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}