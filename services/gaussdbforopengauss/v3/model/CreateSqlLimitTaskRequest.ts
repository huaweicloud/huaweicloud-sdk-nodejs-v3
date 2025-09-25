import { CreateSqlLimitTaskRequestBody } from './CreateSqlLimitTaskRequestBody';


export class CreateSqlLimitTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: CreateSqlLimitTaskRequestXLanguageEnum | string;
    public body?: CreateSqlLimitTaskRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateSqlLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: CreateSqlLimitTaskRequestXLanguageEnum | string): CreateSqlLimitTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSqlLimitTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSqlLimitTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateSqlLimitTaskRequestBody): CreateSqlLimitTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlLimitTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
