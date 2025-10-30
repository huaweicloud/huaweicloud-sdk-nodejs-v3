import { PageInfo } from './PageInfo';
import { ServerOffering } from './ServerOffering';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerOfferingsResponse extends SdkResponse {
    public offerings?: Array<ServerOffering>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withOfferings(offerings: Array<ServerOffering>): ListServerOfferingsResponse {
        this['offerings'] = offerings;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListServerOfferingsResponse {
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