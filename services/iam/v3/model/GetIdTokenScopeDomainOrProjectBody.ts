

export class GetIdTokenScopeDomainOrProjectBody {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): GetIdTokenScopeDomainOrProjectBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetIdTokenScopeDomainOrProjectBody {
        this['name'] = name;
        return this;
    }
}