

export class ListTemplatesRequest {
    public name?: string;
    public page?: string;
    private 'page_size'?: string;
    public constructor() { 
    }
    public withName(name: string): ListTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withPage(page: string): ListTemplatesRequest {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: string): ListTemplatesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
}