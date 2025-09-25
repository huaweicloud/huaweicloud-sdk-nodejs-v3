import { DeleteSqlLimitTaskRequestBody } from './DeleteSqlLimitTaskRequestBody';


export class DeleteSqlLimitTaskRequest {
    private 'task_id'?: string;
    private 'instance_id'?: string;
    private 'X-Language'?: DeleteSqlLimitTaskRequestXLanguageEnum | string;
    public body?: DeleteSqlLimitTaskRequestBody;
    public constructor(taskId?: string, instanceId?: string) { 
        this['task_id'] = taskId;
        this['instance_id'] = instanceId;
    }
    public withTaskId(taskId: string): DeleteSqlLimitTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): DeleteSqlLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: DeleteSqlLimitTaskRequestXLanguageEnum | string): DeleteSqlLimitTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteSqlLimitTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteSqlLimitTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteSqlLimitTaskRequestBody): DeleteSqlLimitTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSqlLimitTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
