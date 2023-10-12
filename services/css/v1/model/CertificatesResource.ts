

export class CertificatesResource {
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): CertificatesResource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CertificatesResource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CertificatesResource {
        this['type'] = type;
        return this;
    }
}