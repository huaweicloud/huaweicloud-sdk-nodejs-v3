

export class CreateServerRequestServerCertificate {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateServerRequestServerCertificate {
        this['id'] = id;
        return this;
    }
}