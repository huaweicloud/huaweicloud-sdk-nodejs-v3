

export class TextDetectionItemsReq {
    public text: string;
    public type?: string;
    public constructor(text?: any) { 
        this['text'] = text;
    }
    public withText(text: string): TextDetectionItemsReq {
        this['text'] = text;
        return this;
    }
    public withType(type: string): TextDetectionItemsReq {
        this['type'] = type;
        return this;
    }
}