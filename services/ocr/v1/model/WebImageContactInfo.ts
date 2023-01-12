

export class WebImageContactInfo {
    public name?: string;
    public phone?: string;
    public province?: string;
    public city?: string;
    public district?: string;
    private 'detail_address'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): WebImageContactInfo {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): WebImageContactInfo {
        this['phone'] = phone;
        return this;
    }
    public withProvince(province: string): WebImageContactInfo {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): WebImageContactInfo {
        this['city'] = city;
        return this;
    }
    public withDistrict(district: string): WebImageContactInfo {
        this['district'] = district;
        return this;
    }
    public withDetailAddress(detailAddress: string): WebImageContactInfo {
        this['detail_address'] = detailAddress;
        return this;
    }
    public set detailAddress(detailAddress: string | undefined) {
        this['detail_address'] = detailAddress;
    }
    public get detailAddress() {
        return this['detail_address'];
    }
}