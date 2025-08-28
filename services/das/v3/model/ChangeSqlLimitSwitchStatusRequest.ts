import { ChangeSqlLimitSwitchStatusBody } from './ChangeSqlLimitSwitchStatusBody';


export class ChangeSqlLimitSwitchStatusRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ChangeSqlLimitSwitchStatusRequestXLanguageEnum | string;
    public body?: ChangeSqlLimitSwitchStatusBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeSqlLimitSwitchStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ChangeSqlLimitSwitchStatusRequestXLanguageEnum | string): ChangeSqlLimitSwitchStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeSqlLimitSwitchStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeSqlLimitSwitchStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ChangeSqlLimitSwitchStatusBody): ChangeSqlLimitSwitchStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeSqlLimitSwitchStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
