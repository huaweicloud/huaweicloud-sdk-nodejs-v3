import { LoginBuiltInAccountRequestBody } from './LoginBuiltInAccountRequestBody';


export class LoginBuiltInAccountRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: LoginBuiltInAccountRequestXLanguageEnum | string;
    public body?: LoginBuiltInAccountRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): LoginBuiltInAccountRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: LoginBuiltInAccountRequestXLanguageEnum | string): LoginBuiltInAccountRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: LoginBuiltInAccountRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): LoginBuiltInAccountRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: LoginBuiltInAccountRequestBody): LoginBuiltInAccountRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LoginBuiltInAccountRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
