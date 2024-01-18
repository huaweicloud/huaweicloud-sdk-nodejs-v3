

export class CaCertificateRequest {
    public id?: string;
    public content?: string;
    public constructor() { 
    }
    public withId(id: string): CaCertificateRequest {
        this['id'] = id;
        return this;
    }
    public withContent(content: string): CaCertificateRequest {
        this['content'] = content;
        return this;
    }
}