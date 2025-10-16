

export class ListSessionMemoryContextRequest {
    private 'X-Language'?: ListSessionMemoryContextRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'session_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, nodeId?: string, sessionId?: string, offset?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['session_id'] = sessionId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: ListSessionMemoryContextRequestXLanguageEnum | string): ListSessionMemoryContextRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSessionMemoryContextRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSessionMemoryContextRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSessionMemoryContextRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListSessionMemoryContextRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSessionId(sessionId: string): ListSessionMemoryContextRequest {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withOffset(offset: number): ListSessionMemoryContextRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSessionMemoryContextRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSessionMemoryContextRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
