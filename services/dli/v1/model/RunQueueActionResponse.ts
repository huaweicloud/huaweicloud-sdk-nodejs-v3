
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunQueueActionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    private 'queue_name'?: string;
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): RunQueueActionResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): RunQueueActionResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): RunQueueActionResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withQueueName(queueName: string): RunQueueActionResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withResult(result: boolean): RunQueueActionResponse {
        this['result'] = result;
        return this;
    }
}