

export class ListVersionDetailsRequest {
    private 'Content-Type'?: string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListVersionDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}