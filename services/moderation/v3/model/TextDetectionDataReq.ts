

export class TextDetectionDataReq {
    public text: string;
    public constructor(text?: any) { 
        this['text'] = text;
    }
    public withText(text: string): TextDetectionDataReq {
        this['text'] = text;
        return this;
    }
}