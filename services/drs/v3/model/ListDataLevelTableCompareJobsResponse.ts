import { CompareJobInfo } from './CompareJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataLevelTableCompareJobsResponse extends SdkResponse {
    private 'compare_jobs'?: Array<CompareJobInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withCompareJobs(compareJobs: Array<CompareJobInfo>): ListDataLevelTableCompareJobsResponse {
        this['compare_jobs'] = compareJobs;
        return this;
    }
    public set compareJobs(compareJobs: Array<CompareJobInfo>  | undefined) {
        this['compare_jobs'] = compareJobs;
    }
    public get compareJobs(): Array<CompareJobInfo> | undefined {
        return this['compare_jobs'];
    }
    public withCount(count: number): ListDataLevelTableCompareJobsResponse {
        this['count'] = count;
        return this;
    }
}