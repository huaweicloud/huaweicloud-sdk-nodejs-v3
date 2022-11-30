
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCreateVideoModerationJobResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'job_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): RunCreateVideoModerationJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withJobId(jobId: string): RunCreateVideoModerationJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}