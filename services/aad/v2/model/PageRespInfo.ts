

export class PageRespInfo {
    private 'content_type'?: string;
    public content?: string;
    public constructor() { 
    }
    public withContentType(contentType: string): PageRespInfo {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content_type'];
    }
    public withContent(content: string): PageRespInfo {
        this['content'] = content;
        return this;
    }
}