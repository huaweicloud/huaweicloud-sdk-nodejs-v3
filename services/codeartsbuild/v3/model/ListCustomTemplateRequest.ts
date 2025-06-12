

export class ListCustomTemplateRequest {
    public name?: string;
    public filter?: string;
    public page?: number;
    private 'page_size'?: number;
    public tags?: string;
    public constructor() { 
    }
    public withName(name: string): ListCustomTemplateRequest {
        this['name'] = name;
        return this;
    }
    public withFilter(filter: string): ListCustomTemplateRequest {
        this['filter'] = filter;
        return this;
    }
    public withPage(page: number): ListCustomTemplateRequest {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): ListCustomTemplateRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTags(tags: string): ListCustomTemplateRequest {
        this['tags'] = tags;
        return this;
    }
}