

export class OsfederationIdentityprovider {
    public id: string;
    public constructor(id: any) { 
        this['id'] = id;
    }
    public withId(id: string): OsfederationIdentityprovider {
        this['id'] = id;
        return this;
    }
}