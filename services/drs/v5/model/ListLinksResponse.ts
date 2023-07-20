import { JobLinkResp } from './JobLinkResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLinksResponse extends SdkResponse {
    private 'job_links'?: Array<JobLinkResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withJobLinks(jobLinks: Array<JobLinkResp>): ListLinksResponse {
        this['job_links'] = jobLinks;
        return this;
    }
    public set jobLinks(jobLinks: Array<JobLinkResp>  | undefined) {
        this['job_links'] = jobLinks;
    }
    public get jobLinks(): Array<JobLinkResp> | undefined {
        return this['job_links'];
    }
    public withTotalCount(totalCount: number): ListLinksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}