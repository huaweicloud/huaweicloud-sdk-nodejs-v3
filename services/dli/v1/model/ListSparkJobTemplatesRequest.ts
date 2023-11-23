

export class ListSparkJobTemplatesRequest {
    public type?: string;
    public keyword?: string;
    private 'page-size'?: number;
    private 'current-page'?: number;
    public constructor() { 
    }
    public withType(type: string): ListSparkJobTemplatesRequest {
        this['type'] = type;
        return this;
    }
    public withKeyword(keyword: string): ListSparkJobTemplatesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withPageSize(pageSize: number): ListSparkJobTemplatesRequest {
        this['page-size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page-size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page-size'];
    }
    public withCurrentPage(currentPage: number): ListSparkJobTemplatesRequest {
        this['current-page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current-page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current-page'];
    }
}