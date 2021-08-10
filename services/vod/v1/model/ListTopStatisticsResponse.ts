import { TopUrl } from './TopUrl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopStatisticsResponse extends SdkResponse {
    private 'top_urls'?: Array<TopUrl> | undefined;
    public constructor() { 
        super();
    }
    public withTopUrls(topUrls: Array<TopUrl>): ListTopStatisticsResponse {
        this['top_urls'] = topUrls;
        return this;
    }
    public set topUrls(topUrls: Array<TopUrl> | undefined) {
        this['top_urls'] = topUrls;
    }
    public get topUrls() {
        return this['top_urls'];
    }
}