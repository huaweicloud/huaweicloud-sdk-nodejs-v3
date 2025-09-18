

export class CheckDeployStatusRequest {
    private 'task_id'?: string;
    private 'record_id'?: string;
    private 'step_state'?: boolean;
    private 'Content-Type'?: CheckDeployStatusRequestContentTypeEnum | string;
    public constructor(taskId?: string, contentType?: string) { 
        this['task_id'] = taskId;
        this['Content-Type'] = contentType;
    }
    public withTaskId(taskId: string): CheckDeployStatusRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withRecordId(recordId: string): CheckDeployStatusRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withStepState(stepState: boolean): CheckDeployStatusRequest {
        this['step_state'] = stepState;
        return this;
    }
    public set stepState(stepState: boolean  | undefined) {
        this['step_state'] = stepState;
    }
    public get stepState(): boolean | undefined {
        return this['step_state'];
    }
    public withContentType(contentType: CheckDeployStatusRequestContentTypeEnum | string): CheckDeployStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CheckDeployStatusRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CheckDeployStatusRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckDeployStatusRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
