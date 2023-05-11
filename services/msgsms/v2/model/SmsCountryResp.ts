

export class SmsCountryResp {
    private 'country_id'?: number | undefined;
    private 'country_name_en'?: string | undefined;
    private 'country_name_zh'?: string | undefined;
    public constructor() { 
    }
    public withCountryId(countryId: number): SmsCountryResp {
        this['country_id'] = countryId;
        return this;
    }
    public set countryId(countryId: number | undefined) {
        this['country_id'] = countryId;
    }
    public get countryId() {
        return this['country_id'];
    }
    public withCountryNameEn(countryNameEn: string): SmsCountryResp {
        this['country_name_en'] = countryNameEn;
        return this;
    }
    public set countryNameEn(countryNameEn: string | undefined) {
        this['country_name_en'] = countryNameEn;
    }
    public get countryNameEn() {
        return this['country_name_en'];
    }
    public withCountryNameZh(countryNameZh: string): SmsCountryResp {
        this['country_name_zh'] = countryNameZh;
        return this;
    }
    public set countryNameZh(countryNameZh: string | undefined) {
        this['country_name_zh'] = countryNameZh;
    }
    public get countryNameZh() {
        return this['country_name_zh'];
    }
}