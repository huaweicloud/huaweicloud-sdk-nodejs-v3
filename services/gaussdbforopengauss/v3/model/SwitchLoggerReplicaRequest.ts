import { SwitchLoggerReplicaRequestBody } from './SwitchLoggerReplicaRequestBody';


export class SwitchLoggerReplicaRequest {
    private 'X-Language'?: SwitchLoggerReplicaRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SwitchLoggerReplicaRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SwitchLoggerReplicaRequestXLanguageEnum | string): SwitchLoggerReplicaRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchLoggerReplicaRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchLoggerReplicaRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SwitchLoggerReplicaRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchLoggerReplicaRequestBody): SwitchLoggerReplicaRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchLoggerReplicaRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
