

export class ListTemplateVarilableDetailsRequest {
    private 'Content-Type'?: string;
    public id?: string;
    public constructor(contentType?: string, id?: string) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): ListTemplateVarilableDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): ListTemplateVarilableDetailsRequest {
        this['id'] = id;
        return this;
    }
}