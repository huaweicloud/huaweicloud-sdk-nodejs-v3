

export class StartPipelineRequest {
    private 'X-Language'?: StartPipelineRequestXLanguageEnum | string;
    private 'pipeline_id'?: string;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withXLanguage(xLanguage: StartPipelineRequestXLanguageEnum | string): StartPipelineRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartPipelineRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartPipelineRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withPipelineId(pipelineId: string): StartPipelineRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
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
