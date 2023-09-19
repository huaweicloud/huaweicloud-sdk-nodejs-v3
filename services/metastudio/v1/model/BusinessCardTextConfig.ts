

export class BusinessCardTextConfig {
    public name?: string;
    public company?: string;
    public title?: string;
    private 'mobile_phone'?: string;
    public phone?: string;
    public mail?: string;
    public address?: string;
    public other1?: string;
    public other2?: string;
    public other3?: string;
    public constructor() { 
    }
    public withName(name: string): BusinessCardTextConfig {
        this['name'] = name;
        return this;
    }
    public withCompany(company: string): BusinessCardTextConfig {
        this['company'] = company;
        return this;
    }
    public withTitle(title: string): BusinessCardTextConfig {
        this['title'] = title;
        return this;
    }
    public withMobilePhone(mobilePhone: string): BusinessCardTextConfig {
        this['mobile_phone'] = mobilePhone;
        return this;
    }
    public set mobilePhone(mobilePhone: string  | undefined) {
        this['mobile_phone'] = mobilePhone;
    }
    public get mobilePhone(): string | undefined {
        return this['mobile_phone'];
    }
    public withPhone(phone: string): BusinessCardTextConfig {
        this['phone'] = phone;
        return this;
    }
    public withMail(mail: string): BusinessCardTextConfig {
        this['mail'] = mail;
        return this;
    }
    public withAddress(address: string): BusinessCardTextConfig {
        this['address'] = address;
        return this;
    }
    public withOther1(other1: string): BusinessCardTextConfig {
        this['other1'] = other1;
        return this;
    }
    public withOther2(other2: string): BusinessCardTextConfig {
        this['other2'] = other2;
        return this;
    }
    public withOther3(other3: string): BusinessCardTextConfig {
        this['other3'] = other3;
        return this;
    }
}