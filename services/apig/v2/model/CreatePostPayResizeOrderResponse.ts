
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostPayResizeOrderResponse extends SdkResponse {
    private 'instance_id'?: string;
    public message?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): CreatePostPayResizeOrderResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMessage(message: string): CreatePostPayResizeOrderResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): CreatePostPayResizeOrderResponse {
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