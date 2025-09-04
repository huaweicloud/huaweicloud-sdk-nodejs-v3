import { TopOriginUrlSummary } from './TopOriginUrlSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCdnDomainTopOriginUrlResponse extends SdkResponse {
    private 'top_origin_url_summary'?: Array<TopOriginUrlSummary>;
    public constructor() { 
        super();
    }
    public withTopOriginUrlSummary(topOriginUrlSummary: Array<TopOriginUrlSummary>): ListCdnDomainTopOriginUrlResponse {
        this['top_origin_url_summary'] = topOriginUrlSummary;
        return this;
    }
    public set topOriginUrlSummary(topOriginUrlSummary: Array<TopOriginUrlSummary>  | undefined) {
        this['top_origin_url_summary'] = topOriginUrlSummary;
    }
    public get topOriginUrlSummary(): Array<TopOriginUrlSummary> | undefined {
        return this['top_origin_url_summary'];
    }
}