import { InterRegionBandwidth } from './InterRegionBandwidth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInterRegionBandwidthResponse extends SdkResponse {
    private 'inter_region_bandwidth'?: InterRegionBandwidth;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withInterRegionBandwidth(interRegionBandwidth: InterRegionBandwidth): CreateInterRegionBandwidthResponse {
        this['inter_region_bandwidth'] = interRegionBandwidth;
        return this;
    }
    public set interRegionBandwidth(interRegionBandwidth: InterRegionBandwidth  | undefined) {
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public get interRegionBandwidth(): InterRegionBandwidth | undefined {
        return this['inter_region_bandwidth'];
    }
    public withRequestId(requestId: string): CreateInterRegionBandwidthResponse {
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