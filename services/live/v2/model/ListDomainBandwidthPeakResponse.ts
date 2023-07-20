import { PeakBandwidthData } from './PeakBandwidthData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainBandwidthPeakResponse extends SdkResponse {
    private 'bandwidth_list'?: Array<PeakBandwidthData>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withBandwidthList(bandwidthList: Array<PeakBandwidthData>): ListDomainBandwidthPeakResponse {
        this['bandwidth_list'] = bandwidthList;
        return this;
    }
    public set bandwidthList(bandwidthList: Array<PeakBandwidthData>  | undefined) {
        this['bandwidth_list'] = bandwidthList;
    }
    public get bandwidthList(): Array<PeakBandwidthData> | undefined {
        return this['bandwidth_list'];
    }
    public withXRequestId(xRequestId: string): ListDomainBandwidthPeakResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}