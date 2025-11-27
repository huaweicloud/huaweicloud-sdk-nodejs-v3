import { TopPathSummary } from './TopPathSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCdnDomainTopPathResponse extends SdkResponse {
    private 'top_path_summary'?: Array<TopPathSummary>;
    public constructor() { 
        super();
    }
    public withTopPathSummary(topPathSummary: Array<TopPathSummary>): ListCdnDomainTopPathResponse {
        this['top_path_summary'] = topPathSummary;
        return this;
    }
    public set topPathSummary(topPathSummary: Array<TopPathSummary>  | undefined) {
        this['top_path_summary'] = topPathSummary;
    }
    public get topPathSummary(): Array<TopPathSummary> | undefined {
        return this['top_path_summary'];
    }
}