

export class OsfederationProtocol {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): OsfederationProtocol {
        this['id'] = id;
        return this;
    }
}