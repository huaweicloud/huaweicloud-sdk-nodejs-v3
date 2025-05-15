import { BandwidthPackageLine } from './BandwidthPackageLine';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPackageLinesResponse extends SdkResponse {
    private 'bandwidth_package_lines'?: Array<BandwidthPackageLine>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
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
    public withPageInfo(pageInfo: PageInfo): ListBandwidthPackageLinesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}