import { CreateSpaceAnalysisTaskBody } from './CreateSpaceAnalysisTaskBody';


export class CreateSpaceAnalysisTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: CreateSpaceAnalysisTaskRequestXLanguageEnum | string;
    public body?: CreateSpaceAnalysisTaskBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateSpaceAnalysisTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: CreateSpaceAnalysisTaskRequestXLanguageEnum | string): CreateSpaceAnalysisTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSpaceAnalysisTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSpaceAnalysisTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateSpaceAnalysisTaskBody): CreateSpaceAnalysisTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSpaceAnalysisTaskRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
