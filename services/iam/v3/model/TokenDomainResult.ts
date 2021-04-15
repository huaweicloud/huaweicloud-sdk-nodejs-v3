

export class TokenDomainResult {
    public name: string;
    public id: string;
    public constructor(name?: any, id?: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): TokenDomainResult {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TokenDomainResult {
        this['id'] = id;
        return this;
    }
}