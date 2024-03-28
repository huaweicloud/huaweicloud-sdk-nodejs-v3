
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAsyncTaskResultResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_status'?: ShowAsyncTaskResultResponseTaskStatusEnum | string;
    private 'task_type'?: ShowAsyncTaskResultResponseTaskTypeEnum | string;
    private 'task_result'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowAsyncTaskResultResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskStatus(taskStatus: ShowAsyncTaskResultResponseTaskStatusEnum | string): ShowAsyncTaskResultResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: ShowAsyncTaskResultResponseTaskStatusEnum | string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): ShowAsyncTaskResultResponseTaskStatusEnum | string | undefined {
        return this['task_status'];
    }
    public withTaskType(taskType: ShowAsyncTaskResultResponseTaskTypeEnum | string): ShowAsyncTaskResultResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ShowAsyncTaskResultResponseTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ShowAsyncTaskResultResponseTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withTaskResult(taskResult: string): ShowAsyncTaskResultResponse {
        this['task_result'] = taskResult;
        return this;
    }
    public set taskResult(taskResult: string  | undefined) {
        this['task_result'] = taskResult;
    }
    public get taskResult(): string | undefined {
        return this['task_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAsyncTaskResultResponseTaskStatusEnum {
    WAITING = 'waiting',
    PROCESSING = 'processing',
    SUCCEED = 'succeed',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAsyncTaskResultResponseTaskTypeEnum {
    IMPORT_API = 'import_api',
    EXPORT_API = 'export_api'
}
