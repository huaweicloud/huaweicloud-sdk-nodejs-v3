import { FullSqlStartRequestBody } from './FullSqlStartRequestBody';


export class StartFullSqlRequest {
    private 'X-Language'?: StartFullSqlRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: FullSqlStartRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartFullSqlRequestXLanguageEnum | string): StartFullSqlRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartFullSqlRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartFullSqlRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartFullSqlRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: FullSqlStartRequestBody): StartFullSqlRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartFullSqlRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
