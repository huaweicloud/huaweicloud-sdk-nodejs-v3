

export class ListStructTemplateRequest {
    private 'Content-Type': string | undefined;
    public id?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListStructTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withId(id: string): ListStructTemplateRequest {
        this['id'] = id;
        return this;
    }
}