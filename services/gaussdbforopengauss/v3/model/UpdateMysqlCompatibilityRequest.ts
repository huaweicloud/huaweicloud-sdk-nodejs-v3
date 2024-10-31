import { UpdateMySQLCompatibilityRequestBody } from './UpdateMySQLCompatibilityRequestBody';


export class UpdateMysqlCompatibilityRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: UpdateMysqlCompatibilityRequestXLanguageEnum | string;
    public body?: UpdateMySQLCompatibilityRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateMysqlCompatibilityRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: UpdateMysqlCompatibilityRequestXLanguageEnum | string): UpdateMysqlCompatibilityRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateMysqlCompatibilityRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateMysqlCompatibilityRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateMySQLCompatibilityRequestBody): UpdateMysqlCompatibilityRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateMysqlCompatibilityRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
