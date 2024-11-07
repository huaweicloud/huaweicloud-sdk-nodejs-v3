import { BandwidthPackageLevel } from './BandwidthPackageLevel';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPackageLevelsResponse extends SdkResponse {
    private 'bandwidth_package_levels'?: Array<BandwidthPackageLevel>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withBandwidthPackageLevels(bandwidthPackageLevels: Array<BandwidthPackageLevel>): ListBandwidthPackageLevelsResponse {
        this['bandwidth_package_levels'] = bandwidthPackageLevels;
        return this;
    }
    public set bandwidthPackageLevels(bandwidthPackageLevels: Array<BandwidthPackageLevel>  | undefined) {
        this['bandwidth_package_levels'] = bandwidthPackageLevels;
    }
    public get bandwidthPackageLevels(): Array<BandwidthPackageLevel> | undefined {
        return this['bandwidth_package_levels'];
    }
    public withRequestId(requestId: string): ListBandwidthPackageLevelsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListBandwidthPackageLevelsResponse {
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