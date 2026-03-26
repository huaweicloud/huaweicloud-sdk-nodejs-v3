

export class ShowLockBlockingSwitchRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'X-Language'?: ShowLockBlockingSwitchRequestXLanguageEnum | string;
    public constructor(instanceId?: string, engineType?: string) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
    }
    public withInstanceId(instanceId: string): ShowLockBlockingSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowLockBlockingSwitchRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withXLanguage(xLanguage: ShowLockBlockingSwitchRequestXLanguageEnum | string): ShowLockBlockingSwitchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowLockBlockingSwitchRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowLockBlockingSwitchRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLockBlockingSwitchRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
