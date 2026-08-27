import { StopOnlineDDLTaskRequestV3 } from './StopOnlineDDLTaskRequestV3';


export class StopOnlineDdlTaskRequest {
    private 'X-Language'?: StopOnlineDdlTaskRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: StopOnlineDDLTaskRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StopOnlineDdlTaskRequestXLanguageEnum | string): StopOnlineDdlTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StopOnlineDdlTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StopOnlineDdlTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StopOnlineDdlTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: StopOnlineDDLTaskRequestV3): StopOnlineDdlTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopOnlineDdlTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
