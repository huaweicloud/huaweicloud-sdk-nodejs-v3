import { VideoTranslateInferenceRewriteConfig } from './VideoTranslateInferenceRewriteConfig';


export class VideoTranslateInference {
    private 'target_language': string | undefined;
    public rewrite?: VideoTranslateInferenceRewriteEnum;
    private 'rewrite_config'?: VideoTranslateInferenceRewriteConfig | undefined;
    public constructor(targetLanguage?: any) { 
        this['target_language'] = targetLanguage;
    }
    public withTargetLanguage(targetLanguage: string): VideoTranslateInference {
        this['target_language'] = targetLanguage;
        return this;
    }
    public set targetLanguage(targetLanguage: string | undefined) {
        this['target_language'] = targetLanguage;
    }
    public get targetLanguage() {
        return this['target_language'];
    }
    public withRewrite(rewrite: VideoTranslateInferenceRewriteEnum): VideoTranslateInference {
        this['rewrite'] = rewrite;
        return this;
    }
    public withRewriteConfig(rewriteConfig: VideoTranslateInferenceRewriteConfig): VideoTranslateInference {
        this['rewrite_config'] = rewriteConfig;
        return this;
    }
    public set rewriteConfig(rewriteConfig: VideoTranslateInferenceRewriteConfig | undefined) {
        this['rewrite_config'] = rewriteConfig;
    }
    public get rewriteConfig() {
        return this['rewrite_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoTranslateInferenceRewriteEnum {
    TRUE = 'true',
    FALSE = 'false'
}
