

export class ListTaurusDbNodeProcessesRequest {
    private 'X-Language'?: ListTaurusDbNodeProcessesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: ListTaurusDbNodeProcessesRequestXLanguageEnum | string): ListTaurusDbNodeProcessesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTaurusDbNodeProcessesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTaurusDbNodeProcessesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListTaurusDbNodeProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListTaurusDbNodeProcessesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): ListTaurusDbNodeProcessesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTaurusDbNodeProcessesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTaurusDbNodeProcessesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
