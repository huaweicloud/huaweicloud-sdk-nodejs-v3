import { LogoffBuiltInAccountRequestBody } from './LogoffBuiltInAccountRequestBody';


export class LogoffBuiltInAccountRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: LogoffBuiltInAccountRequestXLanguageEnum | string;
    public body?: LogoffBuiltInAccountRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): LogoffBuiltInAccountRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: LogoffBuiltInAccountRequestXLanguageEnum | string): LogoffBuiltInAccountRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: LogoffBuiltInAccountRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): LogoffBuiltInAccountRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: LogoffBuiltInAccountRequestBody): LogoffBuiltInAccountRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LogoffBuiltInAccountRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
