

export class PassportRequestBody {
    public image?: string;
    public url?: string;
    private 'country_code'?: string;
    public constructor() { 
    }
    public withImage(image: string): PassportRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): PassportRequestBody {
        this['url'] = url;
        return this;
    }
    public withCountryCode(countryCode: string): PassportRequestBody {
        this['country_code'] = countryCode;
        return this;
    }
    public set countryCode(countryCode: string  | undefined) {
        this['country_code'] = countryCode;
    }
    public get countryCode(): string | undefined {
        return this['country_code'];
    }
}