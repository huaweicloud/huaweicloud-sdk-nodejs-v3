import { TopUaSummary } from './TopUaSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCdnDomainTopUasResponse extends SdkResponse {
    private 'top_ua_summary'?: Array<TopUaSummary>;
    public constructor() { 
        super();
    }
    public withTopUaSummary(topUaSummary: Array<TopUaSummary>): ListCdnDomainTopUasResponse {
        this['top_ua_summary'] = topUaSummary;
        return this;
    }
    public set topUaSummary(topUaSummary: Array<TopUaSummary>  | undefined) {
        this['top_ua_summary'] = topUaSummary;
    }
    public get topUaSummary(): Array<TopUaSummary> | undefined {
        return this['top_ua_summary'];
    }
}