import { FailoverStrategyRequest } from './FailoverStrategyRequest';


export class ChangeFailoverStrategyRequest {
    private 'X-Language'?: ChangeFailoverStrategyRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: FailoverStrategyRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ChangeFailoverStrategyRequestXLanguageEnum | string): ChangeFailoverStrategyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeFailoverStrategyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeFailoverStrategyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ChangeFailoverStrategyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: FailoverStrategyRequest): ChangeFailoverStrategyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeFailoverStrategyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
