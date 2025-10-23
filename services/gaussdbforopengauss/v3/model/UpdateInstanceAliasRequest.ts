import { UpdateInstanceAliasRequestBody } from './UpdateInstanceAliasRequestBody';


export class UpdateInstanceAliasRequest {
    private 'X-Language'?: UpdateInstanceAliasRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: UpdateInstanceAliasRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateInstanceAliasRequestXLanguageEnum | string): UpdateInstanceAliasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateInstanceAliasRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateInstanceAliasRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateInstanceAliasRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceAliasRequestBody): UpdateInstanceAliasRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceAliasRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
