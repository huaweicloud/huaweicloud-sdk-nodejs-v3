import { RegisterDbUserRequestBody } from './RegisterDbUserRequestBody';


export class RegisterDbUserRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: RegisterDbUserRequestXLanguageEnum | string;
    public body?: RegisterDbUserRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RegisterDbUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: RegisterDbUserRequestXLanguageEnum | string): RegisterDbUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RegisterDbUserRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): RegisterDbUserRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: RegisterDbUserRequestBody): RegisterDbUserRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegisterDbUserRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
