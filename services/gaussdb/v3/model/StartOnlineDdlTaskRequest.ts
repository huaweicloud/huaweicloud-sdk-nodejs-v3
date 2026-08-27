import { StartOnlineDDLTaskRequestV3 } from './StartOnlineDDLTaskRequestV3';


export class StartOnlineDdlTaskRequest {
    private 'X-Language'?: StartOnlineDdlTaskRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: StartOnlineDDLTaskRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartOnlineDdlTaskRequestXLanguageEnum | string): StartOnlineDdlTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartOnlineDdlTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartOnlineDdlTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartOnlineDdlTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: StartOnlineDDLTaskRequestV3): StartOnlineDdlTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartOnlineDdlTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
