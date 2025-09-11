

export class ShowSlowSqlStackRequest {
    private 'X-Language'?: ShowSlowSqlStackRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public pid?: string;
    private 'node_id'?: string;
    private 'comp_id'?: string;
    public constructor(instanceId?: string, pid?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['pid'] = pid;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: ShowSlowSqlStackRequestXLanguageEnum | string): ShowSlowSqlStackRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSlowSqlStackRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSlowSqlStackRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowSlowSqlStackRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPid(pid: string): ShowSlowSqlStackRequest {
        this['pid'] = pid;
        return this;
    }
    public withNodeId(nodeId: string): ShowSlowSqlStackRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withCompId(compId: string): ShowSlowSqlStackRequest {
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
export enum ShowSlowSqlStackRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
