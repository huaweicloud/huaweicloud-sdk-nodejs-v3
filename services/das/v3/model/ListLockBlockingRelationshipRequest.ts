

export class ListLockBlockingRelationshipRequest {
    private 'instance_id'?: string;
    private 'unique_id'?: string;
    public spid?: number;
    private 'X-Language'?: ListLockBlockingRelationshipRequestXLanguageEnum | string;
    public constructor(instanceId?: string, uniqueId?: string, spid?: number) { 
        this['instance_id'] = instanceId;
        this['unique_id'] = uniqueId;
        this['spid'] = spid;
    }
    public withInstanceId(instanceId: string): ListLockBlockingRelationshipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUniqueId(uniqueId: string): ListLockBlockingRelationshipRequest {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withSpid(spid: number): ListLockBlockingRelationshipRequest {
        this['spid'] = spid;
        return this;
    }
    public withXLanguage(xLanguage: ListLockBlockingRelationshipRequestXLanguageEnum | string): ListLockBlockingRelationshipRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListLockBlockingRelationshipRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListLockBlockingRelationshipRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLockBlockingRelationshipRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
