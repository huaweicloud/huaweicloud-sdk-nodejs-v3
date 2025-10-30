import { PageInfo } from './PageInfo';
import { RegionDetail } from './RegionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportedRegionsResponse extends SdkResponse {
    public regions?: Array<RegionDetail>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRegions(regions: Array<RegionDetail>): ListSupportedRegionsResponse {
        this['regions'] = regions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListSupportedRegionsResponse {
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