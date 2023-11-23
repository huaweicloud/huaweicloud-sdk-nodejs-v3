

export class CreateMatchHeadersHeader {
    public exact?: string;
    public caseInsensitive?: boolean;
    public constructor() { 
    }
    public withExact(exact: string): CreateMatchHeadersHeader {
        this['exact'] = exact;
        return this;
    }
    public withCaseInsensitive(caseInsensitive: boolean): CreateMatchHeadersHeader {
        this['caseInsensitive'] = caseInsensitive;
        return this;
    }
}