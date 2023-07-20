

export class StopMigrationTaskResult {
    public result?: StopMigrationTaskResultResultEnum | string;
    private 'task_id'?: string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum StopMigrationTaskResultResultEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
