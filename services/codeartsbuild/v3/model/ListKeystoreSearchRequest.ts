

export class ListKeystoreSearchRequest {
    private 'page_size'?: number;
    public page?: number;
    public search?: string;
    public constructor() { 
    }
    public withPageSize(pageSize: number): ListKeystoreSearchRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPage(page: number): ListKeystoreSearchRequest {
        this['page'] = page;
        return this;
    }
    public withSearch(search: string): ListKeystoreSearchRequest {
        this['search'] = search;
        return this;
    }
}