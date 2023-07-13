

export class EnableSignatureRequest {
    private 'Content-Type': string | undefined;
    public id: string;
    public constructor(contentType?: any, id?: any) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): EnableSignatureRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withId(id: string): EnableSignatureRequest {
        this['id'] = id;
        return this;
    }
}