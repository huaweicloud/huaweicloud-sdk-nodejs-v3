import { BandwidthPackage } from './BandwidthPackage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateBandwidthPackageResponse extends SdkResponse {
    private 'bandwidth_package'?: BandwidthPackage;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withBandwidthPackage(bandwidthPackage: BandwidthPackage): DisassociateBandwidthPackageResponse {
        this['bandwidth_package'] = bandwidthPackage;
        return this;
    }
    public set bandwidthPackage(bandwidthPackage: BandwidthPackage  | undefined) {
        this['bandwidth_package'] = bandwidthPackage;
    }
    public get bandwidthPackage(): BandwidthPackage | undefined {
        return this['bandwidth_package'];
    }
    public withRequestId(requestId: string): DisassociateBandwidthPackageResponse {
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