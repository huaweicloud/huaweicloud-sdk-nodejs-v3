import { BatchDeleteInstanceTagRequestBody } from './BatchDeleteInstanceTagRequestBody';


export class BatchDeleteInstanceTagRequest {
    private 'X-Language'?: BatchDeleteInstanceTagRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: BatchDeleteInstanceTagRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: BatchDeleteInstanceTagRequestXLanguageEnum | string): BatchDeleteInstanceTagRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchDeleteInstanceTagRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchDeleteInstanceTagRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): BatchDeleteInstanceTagRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteInstanceTagRequestBody): BatchDeleteInstanceTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteInstanceTagRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
