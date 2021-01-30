

export class TokenUserDomainResult {
    public name: string;
    public id: string;
    public constructor(name: any, id: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): TokenUserDomainResult {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TokenUserDomainResult {
        this['id'] = id;
        return this;
    }
}