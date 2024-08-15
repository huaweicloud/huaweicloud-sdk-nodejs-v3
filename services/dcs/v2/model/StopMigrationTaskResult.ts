

export class StopMigrationTaskResult {
    public result?: StopMigrationTaskResultResultEnum | string;
    private 'task_id'?: string;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withResult(result: StopMigrationTaskResultResultEnum | string): StopMigrationTaskResult {
        this['result'] = result;
        return this;
    }
    public withTaskId(taskId: string): StopMigrationTaskResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withErrorMsg(errorMsg: string): StopMigrationTaskResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): StopMigrationTaskResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopMigrationTaskResultResultEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
