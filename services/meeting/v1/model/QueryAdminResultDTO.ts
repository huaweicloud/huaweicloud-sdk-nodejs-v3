

export class QueryAdminResultDTO {
    public id?: string;
    public account?: string;
    public name?: string;
    public adminType?: number;
    public email?: string;
    public phone?: string;
    public country?: string;
    public constructor() { 
    }
    public withId(id: string): QueryAdminResultDTO {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): QueryAdminResultDTO {
        this['account'] = account;
        return this;
    }
    public withName(name: string): QueryAdminResultDTO {
        this['name'] = name;
        return this;
    }
    public withAdminType(adminType: number): QueryAdminResultDTO {
        this['adminType'] = adminType;
        return this;
    }
    public withEmail(email: string): QueryAdminResultDTO {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): QueryAdminResultDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): QueryAdminResultDTO {
        this['country'] = country;
        return this;
    }
}