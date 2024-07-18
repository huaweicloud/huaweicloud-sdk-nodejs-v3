

export class CreateServerRequestClientCaCertificates {
    public name?: string;
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withName(name: string): CreateServerRequestClientCaCertificates {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateServerRequestClientCaCertificates {
        this['content'] = content;
        return this;
    }
}