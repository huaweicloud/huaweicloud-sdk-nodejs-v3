import { TopIpSummary } from './TopIpSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCdnDomainTopIpsResponse extends SdkResponse {
    private 'top_ip_summary'?: Array<TopIpSummary>;
    public constructor() { 
        super();
    }
    public withTopIpSummary(topIpSummary: Array<TopIpSummary>): ListCdnDomainTopIpsResponse {
        this['top_ip_summary'] = topIpSummary;
        return this;
    }
    public set topIpSummary(topIpSummary: Array<TopIpSummary>  | undefined) {
        this['top_ip_summary'] = topIpSummary;
    }
    public get topIpSummary(): Array<TopIpSummary> | undefined {
        return this['top_ip_summary'];
    }
}