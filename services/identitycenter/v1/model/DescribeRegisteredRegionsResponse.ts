import { RegionDto } from './RegionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeRegisteredRegionsResponse extends SdkResponse {
    public regions?: Array<RegionDto>;
    public constructor() { 
        super();
    }
    public withRegions(regions: Array<RegionDto>): DescribeRegisteredRegionsResponse {
        this['regions'] = regions;
        return this;
    }
}