

export class Reference {
    public title?: string;
    public url?: string;
    public type?: number;
    public productshort?: string;
    private 'is_valid'?: boolean;
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
    public withIsValid(isValid: boolean): Reference {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
}