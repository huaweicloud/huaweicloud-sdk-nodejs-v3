

export class AdminDTO {
    public account?: string;
    public name?: string;
    public pwd?: string;
    public email?: string;
    public phone?: string;
    public country?: string;
    public constructor(account?: string, name?: string, pwd?: string) { 
        this['account'] = account;
        this['name'] = name;
        this['pwd'] = pwd;
    }
    public withAccount(account: string): AdminDTO {
        this['account'] = account;
        return this;
    }
    public withName(name: string): AdminDTO {
        this['name'] = name;
        return this;
    }
    public withPwd(pwd: string): AdminDTO {
        this['pwd'] = pwd;
        return this;
    }
    public withEmail(email: string): AdminDTO {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): AdminDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): AdminDTO {
        this['country'] = country;
        return this;
    }
}