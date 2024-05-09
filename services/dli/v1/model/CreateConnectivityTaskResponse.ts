
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectivityTaskResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'task_id'?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateConnectivityTaskResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateConnectivityTaskResponse {
        this['message'] = message;
        return this;
    }
    public withTaskId(taskId: number): CreateConnectivityTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
}