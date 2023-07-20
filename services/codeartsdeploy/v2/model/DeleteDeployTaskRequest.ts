

export class DeleteDeployTaskRequest {
    private 'task_id'?: string;
    private 'Content-Type'?: DeleteDeployTaskRequestContentTypeEnum | string;
    public constructor(taskId?: string, contentType?: string) { 
        this['task_id'] = taskId;
        this['Content-Type'] = contentType;
    }
    public withTaskId(taskId: string): DeleteDeployTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withContentType(contentType: DeleteDeployTaskRequestContentTypeEnum | string): DeleteDeployTaskRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteDeployTaskRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteDeployTaskRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDeployTaskRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
