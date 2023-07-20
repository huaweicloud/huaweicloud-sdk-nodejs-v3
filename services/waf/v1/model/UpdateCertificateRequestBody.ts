

export class UpdateCertificateRequestBody {
    public name?: string;
    public content?: string;
    public key?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateCertificateRequestBody {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): UpdateCertificateRequestBody {
        this['content'] = content;
        return this;
    }
    public withKey(key: string): UpdateCertificateRequestBody {
        this['key'] = key;
        return this;
    }
}