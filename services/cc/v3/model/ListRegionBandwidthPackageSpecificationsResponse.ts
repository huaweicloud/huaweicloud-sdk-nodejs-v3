import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';
import { RegionBandwidthPackageSpecification } from './RegionBandwidthPackageSpecification';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionBandwidthPackageSpecificationsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'region_specifications'?: Array<RegionBandwidthPackageSpecification>;
    public constructor(requestId?: string, regionSpecifications?: Array<RegionBandwidthPackageSpecification>) { 
        super();
        this['request_id'] = requestId;
        this['region_specifications'] = regionSpecifications;
    }
    public withRequestId(requestId: string): ListRegionBandwidthPackageSpecificationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListRegionBandwidthPackageSpecificationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRegionSpecifications(regionSpecifications: Array<RegionBandwidthPackageSpecification>): ListRegionBandwidthPackageSpecificationsResponse {
        this['region_specifications'] = regionSpecifications;
        return this;
    }
    public set regionSpecifications(regionSpecifications: Array<RegionBandwidthPackageSpecification>  | undefined) {
        this['region_specifications'] = regionSpecifications;
    }
    public get regionSpecifications(): Array<RegionBandwidthPackageSpecification> | undefined {
        return this['region_specifications'];
    }
}