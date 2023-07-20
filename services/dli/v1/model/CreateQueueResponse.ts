
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateQueueResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'queue_name'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateQueueResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateQueueResponse {
        this['message'] = message;
        return this;
    }
    public withQueueName(queueName: string): CreateQueueResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
}