import { InterRegionBandwidth } from './InterRegionBandwidth';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInterRegionBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'inter_region_bandwidth'?: InterRegionBandwidth;
    public constructor(requestId?: string, interRegionBandwidth?: InterRegionBandwidth) { 
        super();
        this['request_id'] = requestId;
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public withRequestId(requestId: string): ShowInterRegionBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInterRegionBandwidth(interRegionBandwidth: InterRegionBandwidth): ShowInterRegionBandwidthResponse {
        this['inter_region_bandwidth'] = interRegionBandwidth;
        return this;
    }
    public set interRegionBandwidth(interRegionBandwidth: InterRegionBandwidth  | undefined) {
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public get interRegionBandwidth(): InterRegionBandwidth | undefined {
        return this['inter_region_bandwidth'];
    }
}