import { NetworkDeviceOffering } from './NetworkDeviceOffering';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetworkDeviceOfferingsResponse extends SdkResponse {
    public offerings?: Array<NetworkDeviceOffering>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withOfferings(offerings: Array<NetworkDeviceOffering>): ListNetworkDeviceOfferingsResponse {
        this['offerings'] = offerings;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListNetworkDeviceOfferingsResponse {
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