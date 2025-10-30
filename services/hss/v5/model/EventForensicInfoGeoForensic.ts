

export class EventForensicInfoGeoForensic {
    private 'src_country'?: string;
    private 'src_city'?: string;
    private 'src_latitude'?: number;
    private 'src_longitude'?: number;
    private 'dest_country'?: string;
    private 'dest_city'?: string;
    private 'dest_latitude'?: number;
    private 'dest_longitude'?: number;
    public constructor() { 
    }
    public withSrcCountry(srcCountry: string): EventForensicInfoGeoForensic {
        this['src_country'] = srcCountry;
        return this;
    }
    public set srcCountry(srcCountry: string  | undefined) {
        this['src_country'] = srcCountry;
    }
    public get srcCountry(): string | undefined {
        return this['src_country'];
    }
    public withSrcCity(srcCity: string): EventForensicInfoGeoForensic {
        this['src_city'] = srcCity;
        return this;
    }
    public set srcCity(srcCity: string  | undefined) {
        this['src_city'] = srcCity;
    }
    public get srcCity(): string | undefined {
        return this['src_city'];
    }
    public withSrcLatitude(srcLatitude: number): EventForensicInfoGeoForensic {
        this['src_latitude'] = srcLatitude;
        return this;
    }
    public set srcLatitude(srcLatitude: number  | undefined) {
        this['src_latitude'] = srcLatitude;
    }
    public get srcLatitude(): number | undefined {
        return this['src_latitude'];
    }
    public withSrcLongitude(srcLongitude: number): EventForensicInfoGeoForensic {
        this['src_longitude'] = srcLongitude;
        return this;
    }
    public set srcLongitude(srcLongitude: number  | undefined) {
        this['src_longitude'] = srcLongitude;
    }
    public get srcLongitude(): number | undefined {
        return this['src_longitude'];
    }
    public withDestCountry(destCountry: string): EventForensicInfoGeoForensic {
        this['dest_country'] = destCountry;
        return this;
    }
    public set destCountry(destCountry: string  | undefined) {
        this['dest_country'] = destCountry;
    }
    public get destCountry(): string | undefined {
        return this['dest_country'];
    }
    public withDestCity(destCity: string): EventForensicInfoGeoForensic {
        this['dest_city'] = destCity;
        return this;
    }
    public set destCity(destCity: string  | undefined) {
        this['dest_city'] = destCity;
    }
    public get destCity(): string | undefined {
        return this['dest_city'];
    }
    public withDestLatitude(destLatitude: number): EventForensicInfoGeoForensic {
        this['dest_latitude'] = destLatitude;
        return this;
    }
    public set destLatitude(destLatitude: number  | undefined) {
        this['dest_latitude'] = destLatitude;
    }
    public get destLatitude(): number | undefined {
        return this['dest_latitude'];
    }
    public withDestLongitude(destLongitude: number): EventForensicInfoGeoForensic {
        this['dest_longitude'] = destLongitude;
        return this;
    }
    public set destLongitude(destLongitude: number  | undefined) {
        this['dest_longitude'] = destLongitude;
    }
    public get destLongitude(): number | undefined {
        return this['dest_longitude'];
    }
}