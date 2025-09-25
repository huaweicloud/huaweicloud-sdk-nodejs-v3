

export class ShowSqlLimitTaskRequest {
    private 'task_id'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'X-Language'?: ShowSqlLimitTaskRequestXLanguageEnum | string;
    public constructor(taskId?: string, instanceId?: string, nodeId?: string) { 
        this['task_id'] = taskId;
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withTaskId(taskId: string): ShowSqlLimitTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): ShowSqlLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowSqlLimitTaskRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withXLanguage(xLanguage: ShowSqlLimitTaskRequestXLanguageEnum | string): ShowSqlLimitTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSqlLimitTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSqlLimitTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlLimitTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
