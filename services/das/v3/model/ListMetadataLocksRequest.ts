

export class ListMetadataLocksRequest {
    private 'instance_id'?: string;
    private 'db_user_id'?: string;
    private 'thread_id'?: string;
    public database?: string;
    public table?: string;
    private 'X-Language'?: ListMetadataLocksRequestXLanguageEnum | string;
    public constructor(instanceId?: string, dbUserId?: string) { 
        this['instance_id'] = instanceId;
        this['db_user_id'] = dbUserId;
    }
    public withInstanceId(instanceId: string): ListMetadataLocksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbUserId(dbUserId: string): ListMetadataLocksRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withThreadId(threadId: string): ListMetadataLocksRequest {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withDatabase(database: string): ListMetadataLocksRequest {
        this['database'] = database;
        return this;
    }
    public withTable(table: string): ListMetadataLocksRequest {
        this['table'] = table;
        return this;
    }
    public withXLanguage(xLanguage: ListMetadataLocksRequestXLanguageEnum | string): ListMetadataLocksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListMetadataLocksRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListMetadataLocksRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMetadataLocksRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
