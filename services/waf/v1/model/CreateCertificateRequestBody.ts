

export class CreateCertificateRequestBody {
    public name: string;
    public content: string;
    public key: string;
    public constructor(name?: any, content?: any, key?: any) { 
        this['name'] = name;
        this['content'] = content;
        this['key'] = key;
    }
    public withName(name: string): CreateCertificateRequestBody {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateCertificateRequestBody {
        this['content'] = content;
        return this;
    }
    public withKey(key: string): CreateCertificateRequestBody {
        this['key'] = key;
        return this;
    }
}