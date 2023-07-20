

export class TextDetectionDataReq {
    public text?: string;
    public constructor(text?: string) { 
        this['text'] = text;
    }
    public withText(text: string): TextDetectionDataReq {
        this['text'] = text;
        return this;
    }
}