import { StopTransactionRequsetBody } from './StopTransactionRequsetBody';


export class StopTransactionRequest {
    private 'X-Language'?: StopTransactionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: StopTransactionRequsetBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StopTransactionRequestXLanguageEnum | string): StopTransactionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StopTransactionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StopTransactionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StopTransactionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: StopTransactionRequsetBody): StopTransactionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopTransactionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
