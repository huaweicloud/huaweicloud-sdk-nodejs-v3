import { ModifySecurityGroupRequestBody } from './ModifySecurityGroupRequestBody';


export class ModifySecurityGroupRequest {
    private 'X-Language'?: ModifySecurityGroupRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ModifySecurityGroupRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ModifySecurityGroupRequestXLanguageEnum | string): ModifySecurityGroupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifySecurityGroupRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifySecurityGroupRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifySecurityGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifySecurityGroupRequestBody): ModifySecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifySecurityGroupRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
