

export class ExternalIdDto {
    public id?: string;
    public issuer?: string;
    public constructor(id?: string, issuer?: string) { 
        this['id'] = id;
        this['issuer'] = issuer;
    }
    public withId(id: string): ExternalIdDto {
        this['id'] = id;
        return this;
    }
    public withIssuer(issuer: string): ExternalIdDto {
        this['issuer'] = issuer;
        return this;
    }
}