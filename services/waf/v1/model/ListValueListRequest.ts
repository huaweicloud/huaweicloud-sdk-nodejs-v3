

export class ListValueListRequest {
    private 'Content-Type'?: string;
    public page?: number;
    public pagesize?: number;
    public name?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListValueListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPage(page: number): ListValueListRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListValueListRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withName(name: string): ListValueListRequest {
        this['name'] = name;
        return this;
    }
}