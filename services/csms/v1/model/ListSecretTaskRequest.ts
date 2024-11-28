

export class ListSecretTaskRequest {
    private 'secret_name'?: string;
    public status?: ListSecretTaskRequestStatusEnum | string;
    private 'task_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withSecretName(secretName: string): ListSecretTaskRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withStatus(status: ListSecretTaskRequestStatusEnum | string): ListSecretTaskRequest {
        this['status'] = status;
        return this;
    }
    public withTaskId(taskId: string): ListSecretTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withLimit(limit: number): ListSecretTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecretTaskRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecretTaskRequestStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
