

export class Reference {
    public title?: string;
    public url?: string;
    public type?: number;
    public productshort?: string;
    public constructor() { 
    }
    public withTitle(title: string): Reference {
        this['title'] = title;
        return this;
    }
    public withUrl(url: string): Reference {
        this['url'] = url;
        return this;
    }
    public withType(type: number): Reference {
        this['type'] = type;
        return this;
    }
    public withProductshort(productshort: string): Reference {
        this['productshort'] = productshort;
        return this;
    }
}