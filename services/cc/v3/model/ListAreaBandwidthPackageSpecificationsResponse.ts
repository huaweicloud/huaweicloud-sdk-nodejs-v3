import { AreaBandwidthPackageSpecification } from './AreaBandwidthPackageSpecification';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAreaBandwidthPackageSpecificationsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'area_specifications'?: Array<AreaBandwidthPackageSpecification>;
    public constructor(requestId?: string, areaSpecifications?: Array<AreaBandwidthPackageSpecification>) { 
        super();
        this['request_id'] = requestId;
        this['area_specifications'] = areaSpecifications;
    }
    public withRequestId(requestId: string): ListAreaBandwidthPackageSpecificationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAreaBandwidthPackageSpecificationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withAreaSpecifications(areaSpecifications: Array<AreaBandwidthPackageSpecification>): ListAreaBandwidthPackageSpecificationsResponse {
        this['area_specifications'] = areaSpecifications;
        return this;
    }
    public set areaSpecifications(areaSpecifications: Array<AreaBandwidthPackageSpecification>  | undefined) {
        this['area_specifications'] = areaSpecifications;
    }
    public get areaSpecifications(): Array<AreaBandwidthPackageSpecification> | undefined {
        return this['area_specifications'];
    }
}