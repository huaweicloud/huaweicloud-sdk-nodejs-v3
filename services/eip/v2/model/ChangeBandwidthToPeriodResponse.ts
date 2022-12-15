
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeBandwidthToPeriodResponse extends SdkResponse {
    private 'bandwidth_ids'?: Array<string> | undefined;
    private 'order_id'?: string | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBandwidthIds(bandwidthIds: Array<string>): ChangeBandwidthToPeriodResponse {
        this['bandwidth_ids'] = bandwidthIds;
        return this;
    }
    public set bandwidthIds(bandwidthIds: Array<string> | undefined) {
        this['bandwidth_ids'] = bandwidthIds;
    }
    public get bandwidthIds() {
        return this['bandwidth_ids'];
    }
    public withOrderId(orderId: string): ChangeBandwidthToPeriodResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withRequestId(requestId: string): ChangeBandwidthToPeriodResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}