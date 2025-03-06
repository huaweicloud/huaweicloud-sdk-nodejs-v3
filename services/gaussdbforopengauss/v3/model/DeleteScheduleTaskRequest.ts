

export class DeleteScheduleTaskRequest {
    private 'X-Language'?: DeleteScheduleTaskRequestXLanguageEnum | string;
    private 'task_id'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withXLanguage(xLanguage: DeleteScheduleTaskRequestXLanguageEnum | string): DeleteScheduleTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteScheduleTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteScheduleTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withTaskId(taskId: string): DeleteScheduleTaskRequest {
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
export enum DeleteScheduleTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
