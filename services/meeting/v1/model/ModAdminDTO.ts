

export class ModAdminDTO {
    public name?: string;
    public email?: string;
    public phone?: string;
    public country?: string;
    public constructor() { 
    }
    public withName(name: string): ModAdminDTO {
        this['name'] = name;
        return this;
    }
    public withEmail(email: string): ModAdminDTO {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): ModAdminDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ModAdminDTO {
        this['country'] = country;
        return this;
    }
}