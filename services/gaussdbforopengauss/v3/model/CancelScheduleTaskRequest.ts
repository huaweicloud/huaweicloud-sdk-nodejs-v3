

export class CancelScheduleTaskRequest {
    private 'X-Language'?: CancelScheduleTaskRequestXLanguageEnum | string;
    private 'task_id'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withXLanguage(xLanguage: CancelScheduleTaskRequestXLanguageEnum | string): CancelScheduleTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CancelScheduleTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CancelScheduleTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withTaskId(taskId: string): CancelScheduleTaskRequest {
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
export enum CancelScheduleTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
