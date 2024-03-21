

export class ListBridgeVersionsRequest {
    public type?: string;
    private 'Content-Type'?: string;
    public constructor(type?: string, contentType?: string) { 
        this['type'] = type;
        this['Content-Type'] = contentType;
    }
    public withType(type: string): ListBridgeVersionsRequest {
        this['type'] = type;
        return this;
    }
    public withContentType(contentType: string): ListBridgeVersionsRequest {
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