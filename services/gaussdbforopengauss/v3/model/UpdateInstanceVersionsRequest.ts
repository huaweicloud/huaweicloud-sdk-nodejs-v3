import { UpgradeRequestBody } from './UpgradeRequestBody';


export class UpdateInstanceVersionsRequest {
    private 'X-Language'?: UpdateInstanceVersionsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: UpgradeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateInstanceVersionsRequestXLanguageEnum | string): UpdateInstanceVersionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateInstanceVersionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateInstanceVersionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateInstanceVersionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpgradeRequestBody): UpdateInstanceVersionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceVersionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
