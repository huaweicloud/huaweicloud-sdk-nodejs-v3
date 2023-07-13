
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLastHistoryResponse extends SdkResponse {
    private 'record_id'?: string | undefined;
    private 'job_id'?: string | undefined;
    private 'job_name'?: string | undefined;
    private 'build_number'?: number | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public result?: string;
    private 'commit_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRecordId(recordId: string): ShowLastHistoryResponse {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId() {
        return this['record_id'];
    }
    public withJobId(jobId: string): ShowLastHistoryResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withJobName(jobName: string): ShowLastHistoryResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName() {
        return this['job_name'];
    }
    public withBuildNumber(buildNumber: number): ShowLastHistoryResponse {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber() {
        return this['build_number'];
    }
    public withStartTime(startTime: string): ShowLastHistoryResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowLastHistoryResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withResult(result: string): ShowLastHistoryResponse {
        this['result'] = result;
        return this;
    }
    public withCommitId(commitId: string): ShowLastHistoryResponse {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId() {
        return this['commit_id'];
    }
}