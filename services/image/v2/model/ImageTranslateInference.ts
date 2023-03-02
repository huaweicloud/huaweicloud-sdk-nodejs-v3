

export class ImageTranslateInference {
    private 'target_language': string | undefined;
    public rewrite?: ImageTranslateInferenceRewriteEnum;
    public constructor(targetLanguage?: any) { 
        this['target_language'] = targetLanguage;
    }
    public withTargetLanguage(targetLanguage: string): ImageTranslateInference {
        this['target_language'] = targetLanguage;
        return this;
    }
    public set targetLanguage(targetLanguage: string | undefined) {
        this['target_language'] = targetLanguage;
    }
    public get targetLanguage() {
        return this['target_language'];
    }
    public withRewrite(rewrite: ImageTranslateInferenceRewriteEnum): ImageTranslateInference {
        this['rewrite'] = rewrite;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageTranslateInferenceRewriteEnum {
    TRUE = 'true',
    FALSE = 'false'
}
