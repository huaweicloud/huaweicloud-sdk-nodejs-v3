

export class ListSendCountryDetailsRequest {
    private 'Content-Type': string | undefined;
    private 'country_name_en'?: string | undefined;
    private 'country_name_zh'?: string | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListSendCountryDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withCountryNameEn(countryNameEn: string): ListSendCountryDetailsRequest {
        this['country_name_en'] = countryNameEn;
        return this;
    }
    public set countryNameEn(countryNameEn: string | undefined) {
        this['country_name_en'] = countryNameEn;
    }
    public get countryNameEn() {
        return this['country_name_en'];
    }
    public withCountryNameZh(countryNameZh: string): ListSendCountryDetailsRequest {
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