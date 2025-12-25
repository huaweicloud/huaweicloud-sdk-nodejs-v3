

export class HwcDomainContact {
    public email?: string;
    public register?: string;
    private 'contact_name'?: string;
    private 'phone_num'?: string;
    public province?: string;
    public city?: string;
    public address?: string;
    private 'zip_code'?: string;
    public constructor(email?: string, register?: string, contactName?: string, phoneNum?: string, province?: string, city?: string, address?: string, zipCode?: string) { 
        this['email'] = email;
        this['register'] = register;
        this['contact_name'] = contactName;
        this['phone_num'] = phoneNum;
        this['province'] = province;
        this['city'] = city;
        this['address'] = address;
        this['zip_code'] = zipCode;
    }
    public withEmail(email: string): HwcDomainContact {
        this['email'] = email;
        return this;
    }
    public withRegister(register: string): HwcDomainContact {
        this['register'] = register;
        return this;
    }
    public withContactName(contactName: string): HwcDomainContact {
        this['contact_name'] = contactName;
        return this;
    }
    public set contactName(contactName: string  | undefined) {
        this['contact_name'] = contactName;
    }
    public get contactName(): string | undefined {
        return this['contact_name'];
    }
    public withPhoneNum(phoneNum: string): HwcDomainContact {
        this['phone_num'] = phoneNum;
        return this;
    }
    public set phoneNum(phoneNum: string  | undefined) {
        this['phone_num'] = phoneNum;
    }
    public get phoneNum(): string | undefined {
        return this['phone_num'];
    }
    public withProvince(province: string): HwcDomainContact {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): HwcDomainContact {
        this['city'] = city;
        return this;
    }
    public withAddress(address: string): HwcDomainContact {
        this['address'] = address;
        return this;
    }
    public withZipCode(zipCode: string): HwcDomainContact {
        this['zip_code'] = zipCode;
        return this;
    }
    public set zipCode(zipCode: string  | undefined) {
        this['zip_code'] = zipCode;
    }
    public get zipCode(): string | undefined {
        return this['zip_code'];
    }
}