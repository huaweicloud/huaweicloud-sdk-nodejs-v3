

export class ShowSlowSqlPlanRequest {
    private 'X-Language'?: ShowSlowSqlPlanRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public pid?: string;
    private 'node_id'?: string;
    private 'comp_id'?: string;
    public constructor(instanceId?: string, pid?: string, nodeId?: string, compId?: string) { 
        this['instance_id'] = instanceId;
        this['pid'] = pid;
        this['node_id'] = nodeId;
        this['comp_id'] = compId;
    }
    public withXLanguage(xLanguage: ShowSlowSqlPlanRequestXLanguageEnum | string): ShowSlowSqlPlanRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSlowSqlPlanRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSlowSqlPlanRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowSlowSqlPlanRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPid(pid: string): ShowSlowSqlPlanRequest {
        this['pid'] = pid;
        return this;
    }
    public withNodeId(nodeId: string): ShowSlowSqlPlanRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withCompId(compId: string): ShowSlowSqlPlanRequest {
        this['comp_id'] = compId;
        return this;
    }
    public set compId(compId: string  | undefined) {
        this['comp_id'] = compId;
    }
    public get compId(): string | undefined {
        return this['comp_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSlowSqlPlanRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
