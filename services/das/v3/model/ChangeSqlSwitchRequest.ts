import { ChangeSqlSwitchBody } from './ChangeSqlSwitchBody';


export class ChangeSqlSwitchRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ChangeSqlSwitchRequestXLanguageEnum | string;
    public body?: ChangeSqlSwitchBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeSqlSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ChangeSqlSwitchRequestXLanguageEnum | string): ChangeSqlSwitchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeSqlSwitchRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeSqlSwitchRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ChangeSqlSwitchBody): ChangeSqlSwitchRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeSqlSwitchRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
