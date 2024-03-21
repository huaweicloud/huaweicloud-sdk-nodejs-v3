

export class ShowFunctionAppRequest {
    public id?: string;
    private 'Content-Type'?: string;
    public constructor(id?: string, contentType?: string) { 
        this['id'] = id;
        this['Content-Type'] = contentType;
    }
    public withId(id: string): ShowFunctionAppRequest {
        this['id'] = id;
        return this;
    }
    public withContentType(contentType: string): ShowFunctionAppRequest {
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