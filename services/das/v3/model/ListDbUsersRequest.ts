

export class ListDbUsersRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'db_user_id'?: string;
    private 'db_username'?: string;
    private 'X-Language'?: ListDbUsersRequestXLanguageEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListDbUsersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListDbUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withDbUserId(dbUserId: string): ListDbUsersRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withDbUsername(dbUsername: string): ListDbUsersRequest {
        this['db_username'] = dbUsername;
        return this;
    }
    public set dbUsername(dbUsername: string  | undefined) {
        this['db_username'] = dbUsername;
    }
    public get dbUsername(): string | undefined {
        return this['db_username'];
    }
    public withXLanguage(xLanguage: ListDbUsersRequestXLanguageEnum | string): ListDbUsersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDbUsersRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDbUsersRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDbUsersRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
