

export class TextDetectionDataReq {
    public text?: string;
    public language?: TextDetectionDataReqLanguageEnum | string;
    public constructor(text?: string) { 
        this['text'] = text;
    }
    public withText(text: string): TextDetectionDataReq {
        this['text'] = text;
        return this;
    }
    public withLanguage(language: TextDetectionDataReqLanguageEnum | string): TextDetectionDataReq {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TextDetectionDataReqLanguageEnum {
    ZH = 'zh'
}
