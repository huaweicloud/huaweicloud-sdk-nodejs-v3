import { TopReferSummary } from './TopReferSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCdnDomainTopRefersResponse extends SdkResponse {
    private 'top_refer_summary'?: Array<TopReferSummary>;
    public constructor() { 
        super();
    }
    public withTopReferSummary(topReferSummary: Array<TopReferSummary>): ListCdnDomainTopRefersResponse {
        this['top_refer_summary'] = topReferSummary;
        return this;
    }
    public set topReferSummary(topReferSummary: Array<TopReferSummary>  | undefined) {
        this['top_refer_summary'] = topReferSummary;
    }
    public get topReferSummary(): Array<TopReferSummary> | undefined {
        return this['top_refer_summary'];
    }
}