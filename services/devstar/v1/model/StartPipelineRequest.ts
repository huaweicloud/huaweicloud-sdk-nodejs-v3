

export class StartPipelineRequest {
    private 'X-Language'?: StartPipelineRequestXLanguageEnum | undefined;
    private 'pipeline_id': string | undefined;
    public constructor(pipelineId?: any) { 
        this['pipeline_id'] = pipelineId;
    }
    public withXLanguage(xLanguage: StartPipelineRequestXLanguageEnum): StartPipelineRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartPipelineRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withPipelineId(pipelineId: string): StartPipelineRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId() {
        return this['pipeline_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartPipelineRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
