

export class StopDeployTaskRequest {
    private 'task_id'?: string;
    private 'record_id'?: string;
    private 'Content-Type'?: StopDeployTaskRequestContentTypeEnum | string;
    public body?: string;
    public constructor(taskId?: string, recordId?: string, contentType?: string) { 
        this['task_id'] = taskId;
        this['record_id'] = recordId;
        this['Content-Type'] = contentType;
    }
    public withTaskId(taskId: string): StopDeployTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withRecordId(recordId: string): StopDeployTaskRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withContentType(contentType: StopDeployTaskRequestContentTypeEnum | string): StopDeployTaskRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: StopDeployTaskRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): StopDeployTaskRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: string): StopDeployTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopDeployTaskRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
