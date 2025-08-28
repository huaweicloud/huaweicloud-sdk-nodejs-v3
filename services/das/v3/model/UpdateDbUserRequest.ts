import { UpdateDbUserRequestBody } from './UpdateDbUserRequestBody';


export class UpdateDbUserRequest {
    private 'instance_id'?: string;
    private 'db_user_id'?: string;
    private 'X-Language'?: UpdateDbUserRequestXLanguageEnum | string;
    public body?: UpdateDbUserRequestBody;
    public constructor(instanceId?: string, dbUserId?: string) { 
        this['instance_id'] = instanceId;
        this['db_user_id'] = dbUserId;
    }
    public withInstanceId(instanceId: string): UpdateDbUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbUserId(dbUserId: string): UpdateDbUserRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withXLanguage(xLanguage: UpdateDbUserRequestXLanguageEnum | string): UpdateDbUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateDbUserRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateDbUserRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateDbUserRequestBody): UpdateDbUserRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDbUserRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
