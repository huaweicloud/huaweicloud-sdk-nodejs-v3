
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckConnectionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CheckConnectionResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CheckConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withTaskId(taskId: string): CheckConnectionResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}