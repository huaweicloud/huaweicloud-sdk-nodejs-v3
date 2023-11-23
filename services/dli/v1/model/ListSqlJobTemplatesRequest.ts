

export class ListSqlJobTemplatesRequest {
    public keyword?: string;
    public constructor() { 
    }
    public withKeyword(keyword: string): ListSqlJobTemplatesRequest {
        this['keyword'] = keyword;
        return this;
    }
}