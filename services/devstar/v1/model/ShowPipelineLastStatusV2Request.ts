

export class ShowPipelineLastStatusV2Request {
    private 'X-Language'?: ShowPipelineLastStatusV2RequestXLanguageEnum | undefined;
    private 'pipeline_id': string | undefined;
    public constructor(pipelineId?: any) { 
        this['pipeline_id'] = pipelineId;
    }
    public withXLanguage(xLanguage: ShowPipelineLastStatusV2RequestXLanguageEnum): ShowPipelineLastStatusV2Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowPipelineLastStatusV2RequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withPipelineId(pipelineId: string): ShowPipelineLastStatusV2Request {
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
export enum ShowPipelineLastStatusV2RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
