
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmAsyncJobResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ConfirmAsyncJobResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ConfirmAsyncJobResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): ConfirmAsyncJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}