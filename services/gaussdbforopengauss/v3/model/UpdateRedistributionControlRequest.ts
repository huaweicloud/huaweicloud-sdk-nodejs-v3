import { RedistributionRequestBody } from './RedistributionRequestBody';


export class UpdateRedistributionControlRequest {
    private 'X-Language'?: UpdateRedistributionControlRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: RedistributionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateRedistributionControlRequestXLanguageEnum | string): UpdateRedistributionControlRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateRedistributionControlRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateRedistributionControlRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateRedistributionControlRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RedistributionRequestBody): UpdateRedistributionControlRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRedistributionControlRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
