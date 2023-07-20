import { BandwidthResp } from './BandwidthResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrePaidBandwidthResponse extends SdkResponse {
    public bandwidth?: BandwidthResp;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: BandwidthResp): UpdatePrePaidBandwidthResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withOrderId(orderId: string): UpdatePrePaidBandwidthResponse {
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