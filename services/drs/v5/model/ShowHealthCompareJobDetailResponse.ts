
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthCompareJobDetailResponse extends SdkResponse {
    public id?: string;
    public type?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'job_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowHealthCompareJobDetailResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ShowHealthCompareJobDetailResponse {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ShowHealthCompareJobDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowHealthCompareJobDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ShowHealthCompareJobDetailResponse {
        this['status'] = status;
        return this;
    }
    public withJobName(jobName: string): ShowHealthCompareJobDetailResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
}