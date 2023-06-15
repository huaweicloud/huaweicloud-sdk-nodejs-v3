import { PeakBandwidthData } from './PeakBandwidthData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainBandwidthPeakResponse extends SdkResponse {
    private 'bandwidth_list'?: Array<PeakBandwidthData> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBandwidthList(bandwidthList: Array<PeakBandwidthData>): ListDomainBandwidthPeakResponse {
        this['bandwidth_list'] = bandwidthList;
        return this;
    }
    public set bandwidthList(bandwidthList: Array<PeakBandwidthData> | undefined) {
        this['bandwidth_list'] = bandwidthList;
    }
    public get bandwidthList() {
        return this['bandwidth_list'];
    }
    public withXRequestId(xRequestId: string): ListDomainBandwidthPeakResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}