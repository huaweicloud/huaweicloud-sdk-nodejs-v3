

export class TaskResponseBody {
    private 'task_id'?: string;
    private 'server_id'?: string;
    public status?: TaskResponseBodyStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskResponseBody {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withServerId(serverId: string): TaskResponseBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withStatus(status: TaskResponseBodyStatusEnum | string): TaskResponseBody {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): TaskResponseBody {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): TaskResponseBody {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskResponseBodyStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
