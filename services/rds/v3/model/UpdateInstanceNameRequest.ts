import { ModifiyInstanceNameRequest } from './ModifiyInstanceNameRequest';


export class UpdateInstanceNameRequest {
    private 'X-Language'?: UpdateInstanceNameRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ModifiyInstanceNameRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateInstanceNameRequestXLanguageEnum | string): UpdateInstanceNameRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateInstanceNameRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateInstanceNameRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateInstanceNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifiyInstanceNameRequest): UpdateInstanceNameRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceNameRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
