

export class DeleteDeployTaskRequest {
    private 'task_id': string | undefined;
    private 'Content-Type': DeleteDeployTaskRequestContentTypeEnum | undefined;
    public constructor(taskId?: any, contentType?: any) { 
        this['task_id'] = taskId;
        this['Content-Type'] = contentType;
    }
    public withTaskId(taskId: string): DeleteDeployTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withContentType(contentType: DeleteDeployTaskRequestContentTypeEnum): DeleteDeployTaskRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteDeployTaskRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
