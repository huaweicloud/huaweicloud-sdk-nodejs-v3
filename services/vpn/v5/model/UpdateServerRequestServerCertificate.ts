

export class UpdateServerRequestServerCertificate {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateServerRequestServerCertificate {
        this['id'] = id;
        return this;
    }
}