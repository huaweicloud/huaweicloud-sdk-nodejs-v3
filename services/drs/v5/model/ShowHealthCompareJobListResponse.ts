import { HealthCompareJob } from './HealthCompareJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthCompareJobListResponse extends SdkResponse {
    public count?: number;
    private 'compare_jobs'?: Array<HealthCompareJob>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowHealthCompareJobListResponse {
        this['count'] = count;
        return this;
    }
    public withCompareJobs(compareJobs: Array<HealthCompareJob>): ShowHealthCompareJobListResponse {
        this['compare_jobs'] = compareJobs;
        return this;
    }
    public set compareJobs(compareJobs: Array<HealthCompareJob>  | undefined) {
        this['compare_jobs'] = compareJobs;
    }
    public get compareJobs(): Array<HealthCompareJob> | undefined {
        return this['compare_jobs'];
    }
}