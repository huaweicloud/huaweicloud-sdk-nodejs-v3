

export class UpdateServerRequestServerCertificate {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateServerRequestServerCertificate {
        this['id'] = id;
        return this;
    }
}