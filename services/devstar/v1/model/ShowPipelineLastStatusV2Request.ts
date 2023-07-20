

export class ShowPipelineLastStatusV2Request {
    private 'X-Language'?: ShowPipelineLastStatusV2RequestXLanguageEnum | string;
    private 'pipeline_id'?: string;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withXLanguage(xLanguage: ShowPipelineLastStatusV2RequestXLanguageEnum | string): ShowPipelineLastStatusV2Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowPipelineLastStatusV2RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowPipelineLastStatusV2RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withPipelineId(pipelineId: string): ShowPipelineLastStatusV2Request {
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
export enum ShowPipelineLastStatusV2RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
