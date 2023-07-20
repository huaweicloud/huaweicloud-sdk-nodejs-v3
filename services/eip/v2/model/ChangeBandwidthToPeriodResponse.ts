
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeBandwidthToPeriodResponse extends SdkResponse {
    private 'bandwidth_ids'?: Array<string>;
    private 'order_id'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withBandwidthIds(bandwidthIds: Array<string>): ChangeBandwidthToPeriodResponse {
        this['bandwidth_ids'] = bandwidthIds;
        return this;
    }
    public set bandwidthIds(bandwidthIds: Array<string>  | undefined) {
        this['bandwidth_ids'] = bandwidthIds;
    }
    public get bandwidthIds(): Array<string> | undefined {
        return this['bandwidth_ids'];
    }
    public withOrderId(orderId: string): ChangeBandwidthToPeriodResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withRequestId(requestId: string): ChangeBandwidthToPeriodResponse {
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