import { ExpansionParametersRequestBody } from './ExpansionParametersRequestBody';


export class UpdateExpansionParametersRequest {
    private 'X-Language'?: UpdateExpansionParametersRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ExpansionParametersRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateExpansionParametersRequestXLanguageEnum | string): UpdateExpansionParametersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateExpansionParametersRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateExpansionParametersRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateExpansionParametersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExpansionParametersRequestBody): UpdateExpansionParametersRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateExpansionParametersRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
