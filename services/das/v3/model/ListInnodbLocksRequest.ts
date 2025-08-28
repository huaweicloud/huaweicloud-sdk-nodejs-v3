

export class ListInnodbLocksRequest {
    private 'instance_id'?: string;
    private 'db_user_id'?: string;
    private 'X-Language'?: ListInnodbLocksRequestXLanguageEnum | string;
    public constructor(instanceId?: string, dbUserId?: string) { 
        this['instance_id'] = instanceId;
        this['db_user_id'] = dbUserId;
    }
    public withInstanceId(instanceId: string): ListInnodbLocksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbUserId(dbUserId: string): ListInnodbLocksRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withXLanguage(xLanguage: ListInnodbLocksRequestXLanguageEnum | string): ListInnodbLocksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInnodbLocksRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInnodbLocksRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInnodbLocksRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
