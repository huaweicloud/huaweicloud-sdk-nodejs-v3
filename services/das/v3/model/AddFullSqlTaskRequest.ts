import { AddFullSqlTaskBody } from './AddFullSqlTaskBody';


export class AddFullSqlTaskRequest {
    private 'X-Language'?: AddFullSqlTaskRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: AddFullSqlTaskBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: AddFullSqlTaskRequestXLanguageEnum | string): AddFullSqlTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: AddFullSqlTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): AddFullSqlTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): AddFullSqlTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddFullSqlTaskBody): AddFullSqlTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddFullSqlTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
