import { BigKeyHotKeySwitchReq } from './BigKeyHotKeySwitchReq';


export class ChangeBigKeyHotKeySwitchRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ChangeBigKeyHotKeySwitchRequestXLanguageEnum | string;
    public body?: BigKeyHotKeySwitchReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeBigKeyHotKeySwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ChangeBigKeyHotKeySwitchRequestXLanguageEnum | string): ChangeBigKeyHotKeySwitchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeBigKeyHotKeySwitchRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeBigKeyHotKeySwitchRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BigKeyHotKeySwitchReq): ChangeBigKeyHotKeySwitchRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeBigKeyHotKeySwitchRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
