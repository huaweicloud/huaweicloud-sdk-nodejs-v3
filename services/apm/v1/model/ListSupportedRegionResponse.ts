import { RegionParam } from './RegionParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportedRegionResponse extends SdkResponse {
    private 'region_list'?: Array<RegionParam>;
    public constructor() { 
        super();
    }
    public withRegionList(regionList: Array<RegionParam>): ListSupportedRegionResponse {
        this['region_list'] = regionList;
        return this;
    }
    public set regionList(regionList: Array<RegionParam>  | undefined) {
        this['region_list'] = regionList;
    }
    public get regionList(): Array<RegionParam> | undefined {
        return this['region_list'];
    }
}