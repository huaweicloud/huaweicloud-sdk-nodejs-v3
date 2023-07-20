

export class SmsCountryResp {
    private 'country_id'?: number;
    private 'country_name_en'?: string;
    private 'country_name_zh'?: string;
    public constructor() { 
    }
    public withCountryId(countryId: number): SmsCountryResp {
        this['country_id'] = countryId;
        return this;
    }
    public set countryId(countryId: number  | undefined) {
        this['country_id'] = countryId;
    }
    public get countryId(): number | undefined {
        return this['country_id'];
    }
    public withCountryNameEn(countryNameEn: string): SmsCountryResp {
        this['country_name_en'] = countryNameEn;
        return this;
    }
    public set countryNameEn(countryNameEn: string  | undefined) {
        this['country_name_en'] = countryNameEn;
    }
    public get countryNameEn(): string | undefined {
        return this['country_name_en'];
    }
    public withCountryNameZh(countryNameZh: string): SmsCountryResp {
        this['country_name_zh'] = countryNameZh;
        return this;
    }
    public set countryNameZh(countryNameZh: string  | undefined) {
        this['country_name_zh'] = countryNameZh;
    }
    public get countryNameZh(): string | undefined {
        return this['country_name_zh'];
    }
}