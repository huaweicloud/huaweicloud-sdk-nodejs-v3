import { DbUserPwdRequest } from './DbUserPwdRequest';


export class SetPostgresqlDbUserPwdRequest {
    private 'X-Language'?: SetPostgresqlDbUserPwdRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DbUserPwdRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SetPostgresqlDbUserPwdRequestXLanguageEnum | string): SetPostgresqlDbUserPwdRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetPostgresqlDbUserPwdRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetPostgresqlDbUserPwdRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SetPostgresqlDbUserPwdRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DbUserPwdRequest): SetPostgresqlDbUserPwdRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetPostgresqlDbUserPwdRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
