

export class ListVersionDetailsRequest {
    private 'Content-Type'?: string | undefined;
    public constructor() { 
    }
    public withContentType(contentType: string): ListVersionDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}