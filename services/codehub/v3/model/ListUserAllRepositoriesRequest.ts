

export class ListUserAllRepositoriesRequest {
    private 'page_index'?: number;
    private 'page_size'?: number;
    public search?: string;
    public constructor() { 
    }
    public withPageIndex(pageIndex: number): ListUserAllRepositoriesRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListUserAllRepositoriesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSearch(search: string): ListUserAllRepositoriesRequest {
        this['search'] = search;
        return this;
    }
}