import { BandwidthPackageSite } from './BandwidthPackageSite';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPackageSitesResponse extends SdkResponse {
    private 'bandwidth_package_sites'?: Array<BandwidthPackageSite>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withBandwidthPackageSites(bandwidthPackageSites: Array<BandwidthPackageSite>): ListBandwidthPackageSitesResponse {
        this['bandwidth_package_sites'] = bandwidthPackageSites;
        return this;
    }
    public set bandwidthPackageSites(bandwidthPackageSites: Array<BandwidthPackageSite>  | undefined) {
        this['bandwidth_package_sites'] = bandwidthPackageSites;
    }
    public get bandwidthPackageSites(): Array<BandwidthPackageSite> | undefined {
        return this['bandwidth_package_sites'];
    }
    public withRequestId(requestId: string): ListBandwidthPackageSitesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListBandwidthPackageSitesResponse {
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