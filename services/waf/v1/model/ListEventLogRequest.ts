

export class ListEventLogRequest {
    private 'Content-Type'?: string;
    public page?: number;
    public pagesize?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListEventLogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPage(page: number): ListEventLogRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListEventLogRequest {
        this['pagesize'] = pagesize;
        return this;
    }
}