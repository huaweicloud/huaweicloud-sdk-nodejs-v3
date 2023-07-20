
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'job_status'?: object;
    private 'job_result'?: string;
    private 'show_type'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowJobDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowJobDetailResponse {
        this['name'] = name;
        return this;
    }
    public withJobStatus(jobStatus: object): ShowJobDetailResponse {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: object  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): object | undefined {
        return this['job_status'];
    }
    public withJobResult(jobResult: string): ShowJobDetailResponse {
        this['job_result'] = jobResult;
        return this;
    }
    public set jobResult(jobResult: string  | undefined) {
        this['job_result'] = jobResult;
    }
    public get jobResult(): string | undefined {
        return this['job_result'];
    }
    public withShowType(showType: string): ShowJobDetailResponse {
        this['show_type'] = showType;
        return this;
    }
    public set showType(showType: string  | undefined) {
        this['show_type'] = showType;
    }
    public get showType(): string | undefined {
        return this['show_type'];
    }
}