

export class ModCorpBasicDTO {
    public name?: string;
    public phone?: string;
    public country?: string;
    public fax?: string;
    public email?: string;
    public address?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ModCorpBasicDTO {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): ModCorpBasicDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ModCorpBasicDTO {
        this['country'] = country;
        return this;
    }
    public withFax(fax: string): ModCorpBasicDTO {
        this['fax'] = fax;
        return this;
    }
    public withEmail(email: string): ModCorpBasicDTO {
        this['email'] = email;
        return this;
    }
    public withAddress(address: string): ModCorpBasicDTO {
        this['address'] = address;
        return this;
    }
    public withDescription(description: string): ModCorpBasicDTO {
        this['description'] = description;
        return this;
    }
}