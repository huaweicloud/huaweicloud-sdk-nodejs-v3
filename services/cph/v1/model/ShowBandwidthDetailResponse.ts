import { Bandwidth } from './Bandwidth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBandwidthDetailResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'band_widths'?: Array<Bandwidth>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowBandwidthDetailResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withBandWidths(bandWidths: Array<Bandwidth>): ShowBandwidthDetailResponse {
        this['band_widths'] = bandWidths;
        return this;
    }
    public set bandWidths(bandWidths: Array<Bandwidth>  | undefined) {
        this['band_widths'] = bandWidths;
    }
    public get bandWidths(): Array<Bandwidth> | undefined {
        return this['band_widths'];
    }
}