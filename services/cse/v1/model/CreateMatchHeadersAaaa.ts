

export class CreateMatchHeadersAaaa {
    public exact?: string;
    public caseInsensitive?: boolean;
    public constructor() { 
    }
    public withExact(exact: string): CreateMatchHeadersAaaa {
        this['exact'] = exact;
        return this;
    }
    public withCaseInsensitive(caseInsensitive: boolean): CreateMatchHeadersAaaa {
        this['caseInsensitive'] = caseInsensitive;
        return this;
    }
}