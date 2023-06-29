

export class CorpBasicDTO {
    public name: string;
    public domain?: string;
    public phone?: string;
    public country?: string;
    public fax?: string;
    public email?: string;
    public address?: string;
    public description?: string;
    public spId?: string;
    public language?: CorpBasicDTOLanguageEnum;
    public timeZoneId?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CorpBasicDTO {
        this['name'] = name;
        return this;
    }
    public withDomain(domain: string): CorpBasicDTO {
        this['domain'] = domain;
        return this;
    }
    public withPhone(phone: string): CorpBasicDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): CorpBasicDTO {
        this['country'] = country;
        return this;
    }
    public withFax(fax: string): CorpBasicDTO {
        this['fax'] = fax;
        return this;
    }
    public withEmail(email: string): CorpBasicDTO {
        this['email'] = email;
        return this;
    }
    public withAddress(address: string): CorpBasicDTO {
        this['address'] = address;
        return this;
    }
    public withDescription(description: string): CorpBasicDTO {
        this['description'] = description;
        return this;
    }
    public withSpId(spId: string): CorpBasicDTO {
        this['spId'] = spId;
        return this;
    }
    public withLanguage(language: CorpBasicDTOLanguageEnum): CorpBasicDTO {
        this['language'] = language;
        return this;
    }
    public withTimeZoneId(timeZoneId: string): CorpBasicDTO {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CorpBasicDTOLanguageEnum {
    ZH_CN = 'zh-CN',
    EN_US = 'en-US'
}
