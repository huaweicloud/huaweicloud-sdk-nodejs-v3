

export class ImportClientCaCertificateRequestBodyClientCaCertificate {
    public name?: string;
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withName(name: string): ImportClientCaCertificateRequestBodyClientCaCertificate {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): ImportClientCaCertificateRequestBodyClientCaCertificate {
        this['content'] = content;
        return this;
    }
}