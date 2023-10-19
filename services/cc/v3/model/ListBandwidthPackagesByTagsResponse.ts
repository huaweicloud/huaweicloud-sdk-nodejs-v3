import { BandwidthPackage } from './BandwidthPackage';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPackagesByTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'bandwidth_packages'?: Array<BandwidthPackage>;
    public constructor(requestId?: string, bandwidthPackages?: Array<BandwidthPackage>) { 
        super();
        this['request_id'] = requestId;
        this['bandwidth_packages'] = bandwidthPackages;
    }
    public withRequestId(requestId: string): ListBandwidthPackagesByTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListBandwidthPackagesByTagsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withBandwidthPackages(bandwidthPackages: Array<BandwidthPackage>): ListBandwidthPackagesByTagsResponse {
        this['bandwidth_packages'] = bandwidthPackages;
        return this;
    }
    public set bandwidthPackages(bandwidthPackages: Array<BandwidthPackage>  | undefined) {
        this['bandwidth_packages'] = bandwidthPackages;
    }
    public get bandwidthPackages(): Array<BandwidthPackage> | undefined {
        return this['bandwidth_packages'];
    }
}