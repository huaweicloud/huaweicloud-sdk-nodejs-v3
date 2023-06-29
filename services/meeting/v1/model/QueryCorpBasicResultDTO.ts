

export class QueryCorpBasicResultDTO {
    public name?: string;
    public phone?: string;
    public country?: string;
    public fax?: string;
    public email?: string;
    public address?: string;
    public description?: string;
    public spId?: string;
    public constructor() { 
    }
    public withName(name: string): QueryCorpBasicResultDTO {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): QueryCorpBasicResultDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): QueryCorpBasicResultDTO {
        this['country'] = country;
        return this;
    }
    public withFax(fax: string): QueryCorpBasicResultDTO {
        this['fax'] = fax;
        return this;
    }
    public withEmail(email: string): QueryCorpBasicResultDTO {
        this['email'] = email;
        return this;
    }
    public withAddress(address: string): QueryCorpBasicResultDTO {
        this['address'] = address;
        return this;
    }
    public withDescription(description: string): QueryCorpBasicResultDTO {
        this['description'] = description;
        return this;
    }
    public withSpId(spId: string): QueryCorpBasicResultDTO {
        this['spId'] = spId;
        return this;
    }
}