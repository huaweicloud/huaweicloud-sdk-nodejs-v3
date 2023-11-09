
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobStatisticsResponse extends SdkResponse {
    private 'job_cnt'?: number;
    private 'job_ins_cnt'?: number;
    private 'job_ins_fail_cnt'?: number;
    private 'job_ins_intercept_cnt'?: number;
    private 'job_ins_success_cnt'?: number;
    public constructor() { 
        super();
    }
    public withJobCnt(jobCnt: number): ShowJobStatisticsResponse {
        this['job_cnt'] = jobCnt;
        return this;
    }
    public set jobCnt(jobCnt: number  | undefined) {
        this['job_cnt'] = jobCnt;
    }
    public get jobCnt(): number | undefined {
        return this['job_cnt'];
    }
    public withJobInsCnt(jobInsCnt: number): ShowJobStatisticsResponse {
        this['job_ins_cnt'] = jobInsCnt;
        return this;
    }
    public set jobInsCnt(jobInsCnt: number  | undefined) {
        this['job_ins_cnt'] = jobInsCnt;
    }
    public get jobInsCnt(): number | undefined {
        return this['job_ins_cnt'];
    }
    public withJobInsFailCnt(jobInsFailCnt: number): ShowJobStatisticsResponse {
        this['job_ins_fail_cnt'] = jobInsFailCnt;
        return this;
    }
    public set jobInsFailCnt(jobInsFailCnt: number  | undefined) {
        this['job_ins_fail_cnt'] = jobInsFailCnt;
    }
    public get jobInsFailCnt(): number | undefined {
        return this['job_ins_fail_cnt'];
    }
    public withJobInsInterceptCnt(jobInsInterceptCnt: number): ShowJobStatisticsResponse {
        this['job_ins_intercept_cnt'] = jobInsInterceptCnt;
        return this;
    }
    public set jobInsInterceptCnt(jobInsInterceptCnt: number  | undefined) {
        this['job_ins_intercept_cnt'] = jobInsInterceptCnt;
    }
    public get jobInsInterceptCnt(): number | undefined {
        return this['job_ins_intercept_cnt'];
    }
    public withJobInsSuccessCnt(jobInsSuccessCnt: number): ShowJobStatisticsResponse {
        this['job_ins_success_cnt'] = jobInsSuccessCnt;
        return this;
    }
    public set jobInsSuccessCnt(jobInsSuccessCnt: number  | undefined) {
        this['job_ins_success_cnt'] = jobInsSuccessCnt;
    }
    public get jobInsSuccessCnt(): number | undefined {
        return this['job_ins_success_cnt'];
    }
}