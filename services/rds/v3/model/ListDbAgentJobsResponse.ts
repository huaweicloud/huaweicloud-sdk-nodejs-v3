import { ListDbAgentJobsResult } from './ListDbAgentJobsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbAgentJobsResponse extends SdkResponse {
    public jobs?: Array<ListDbAgentJobsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<ListDbAgentJobsResult>): ListDbAgentJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotalCount(totalCount: number): ListDbAgentJobsResponse {
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