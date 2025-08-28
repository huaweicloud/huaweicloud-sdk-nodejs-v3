

export class DeleteDbUserRequest {
    private 'instance_id'?: string;
    private 'db_user_id'?: string;
    private 'X-Language'?: DeleteDbUserRequestXLanguageEnum | string;
    public constructor(instanceId?: string, dbUserId?: string) { 
        this['instance_id'] = instanceId;
        this['db_user_id'] = dbUserId;
    }
    public withInstanceId(instanceId: string): DeleteDbUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbUserId(dbUserId: string): DeleteDbUserRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withXLanguage(xLanguage: DeleteDbUserRequestXLanguageEnum | string): DeleteDbUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteDbUserRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteDbUserRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDbUserRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
