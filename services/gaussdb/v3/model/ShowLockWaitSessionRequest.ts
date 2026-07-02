

export class ShowLockWaitSessionRequest {
    private 'X-Language'?: ShowLockWaitSessionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public pid?: number;
    public constructor(instanceId?: string, nodeId?: string, pid?: number) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['pid'] = pid;
    }
    public withXLanguage(xLanguage: ShowLockWaitSessionRequestXLanguageEnum | string): ShowLockWaitSessionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowLockWaitSessionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowLockWaitSessionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowLockWaitSessionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowLockWaitSessionRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withPid(pid: number): ShowLockWaitSessionRequest {
        this['pid'] = pid;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLockWaitSessionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
