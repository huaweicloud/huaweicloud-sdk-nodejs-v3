import { UpdateSqlLimitTaskRequestBody } from './UpdateSqlLimitTaskRequestBody';


export class UpdateSqlLimitTaskRequest {
    private 'instance_id'?: string;
    private 'task_id'?: string;
    private 'X-Language'?: UpdateSqlLimitTaskRequestXLanguageEnum | string;
    public body?: UpdateSqlLimitTaskRequestBody;
    public constructor(instanceId?: string, taskId?: string) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): UpdateSqlLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): UpdateSqlLimitTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withXLanguage(xLanguage: UpdateSqlLimitTaskRequestXLanguageEnum | string): UpdateSqlLimitTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateSqlLimitTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateSqlLimitTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateSqlLimitTaskRequestBody): UpdateSqlLimitTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlLimitTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
