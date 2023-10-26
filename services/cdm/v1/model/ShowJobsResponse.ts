import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobsResponse extends SdkResponse {
    public total?: number;
    public jobs?: Array<Job>;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowJobsResponse {
        this['total'] = total;
        return this;
    }
    public withJobs(jobs: Array<Job>): ShowJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withPageNo(pageNo: number): ShowJobsResponse {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ShowJobsResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}