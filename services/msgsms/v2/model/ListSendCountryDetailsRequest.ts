

export class ListSendCountryDetailsRequest {
    private 'Content-Type'?: string;
    private 'country_name_en'?: string;
    private 'country_name_zh'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListSendCountryDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCountryNameEn(countryNameEn: string): ListSendCountryDetailsRequest {
        this['country_name_en'] = countryNameEn;
        return this;
    }
    public set countryNameEn(countryNameEn: string  | undefined) {
        this['country_name_en'] = countryNameEn;
    }
    public get countryNameEn(): string | undefined {
        return this['country_name_en'];
    }
    public withCountryNameZh(countryNameZh: string): ListSendCountryDetailsRequest {
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