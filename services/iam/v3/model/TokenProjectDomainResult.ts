

export class TokenProjectDomainResult {
    public name?: string;
    public id?: string;
    public constructor(name?: string, id?: string) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): TokenProjectDomainResult {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TokenProjectDomainResult {
        this['id'] = id;
        return this;
    }
}