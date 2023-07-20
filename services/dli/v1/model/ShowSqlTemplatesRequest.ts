

export class ShowSqlTemplatesRequest {
    public keyword?: string;
    public constructor() { 
    }
    public withKeyword(keyword: string): ShowSqlTemplatesRequest {
        this['keyword'] = keyword;
        return this;
    }
}