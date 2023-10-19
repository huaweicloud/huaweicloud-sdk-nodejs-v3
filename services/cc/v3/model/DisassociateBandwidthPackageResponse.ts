import { BandwidthPackage } from './BandwidthPackage';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateBandwidthPackageResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'bandwidth_package'?: BandwidthPackage;
    public constructor(requestId?: string, bandwidthPackage?: BandwidthPackage) { 
        super();
        this['request_id'] = requestId;
        this['bandwidth_package'] = bandwidthPackage;
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
}