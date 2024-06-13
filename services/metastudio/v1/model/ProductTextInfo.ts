

export class ProductTextInfo {
    public title?: string;
    public text?: string;
    public constructor() { 
    }
    public withTitle(title: string): ProductTextInfo {
        this['title'] = title;
        return this;
    }
    public withText(text: string): ProductTextInfo {
        this['text'] = text;
        return this;
    }
}