import { ModifyOpsWindowRequestBody } from './ModifyOpsWindowRequestBody';


export class ModifyOpsWindowRequest {
    private 'X-Language'?: ModifyOpsWindowRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ModifyOpsWindowRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ModifyOpsWindowRequestXLanguageEnum | string): ModifyOpsWindowRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyOpsWindowRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyOpsWindowRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifyOpsWindowRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyOpsWindowRequestBody): ModifyOpsWindowRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyOpsWindowRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
