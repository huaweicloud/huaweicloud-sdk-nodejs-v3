import { BandwidthPackageLine } from './BandwidthPackageLine';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPackageLinesResponse extends SdkResponse {
    private 'bandwidth_package_lines'?: Array<BandwidthPackageLine>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withBandwidthPackageLines(bandwidthPackageLines: Array<BandwidthPackageLine>): ListBandwidthPackageLinesResponse {
        this['bandwidth_package_lines'] = bandwidthPackageLines;
        return this;
    }
    public set bandwidthPackageLines(bandwidthPackageLines: Array<BandwidthPackageLine>  | undefined) {
        this['bandwidth_package_lines'] = bandwidthPackageLines;
    }
    public get bandwidthPackageLines(): Array<BandwidthPackageLine> | undefined {
        return this['bandwidth_package_lines'];
    }
    public withRequestId(requestId: string): ListBandwidthPackageLinesResponse {
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