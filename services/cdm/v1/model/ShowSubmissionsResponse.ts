import { Submission } from './Submission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubmissionsResponse extends SdkResponse {
    public submissions?: Array<Submission>;
    public total?: number;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor() { 
        super();
    }
    public withSubmissions(submissions: Array<Submission>): ShowSubmissionsResponse {
        this['submissions'] = submissions;
        return this;
    }
    public withTotal(total: number): ShowSubmissionsResponse {
        this['total'] = total;
        return this;
    }
    public withPageNo(pageNo: number): ShowSubmissionsResponse {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ShowSubmissionsResponse {
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