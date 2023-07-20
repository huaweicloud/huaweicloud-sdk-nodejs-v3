import { EnvExecutionBody } from './EnvExecutionBody';


export class StartDeployTaskRequest {
    private 'task_id'?: string;
    private 'Content-Type'?: StartDeployTaskRequestContentTypeEnum | string;
    public body?: EnvExecutionBody;
    public constructor(taskId?: string, contentType?: string) { 
        this['task_id'] = taskId;
        this['Content-Type'] = contentType;
    }
    public withTaskId(taskId: string): StartDeployTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withContentType(contentType: StartDeployTaskRequestContentTypeEnum | string): StartDeployTaskRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: StartDeployTaskRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): StartDeployTaskRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: EnvExecutionBody): StartDeployTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartDeployTaskRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
