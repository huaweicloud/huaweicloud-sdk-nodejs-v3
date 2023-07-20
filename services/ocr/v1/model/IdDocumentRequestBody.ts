

export class IdDocumentRequestBody {
    public image?: string;
    public url?: string;
    private 'country_region'?: Array<string>;
    private 'id_type'?: Array<string>;
    private 'return_portrait_image'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): IdDocumentRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): IdDocumentRequestBody {
        this['url'] = url;
        return this;
    }
    public withCountryRegion(countryRegion: Array<string>): IdDocumentRequestBody {
        this['country_region'] = countryRegion;
        return this;
    }
    public set countryRegion(countryRegion: Array<string>  | undefined) {
        this['country_region'] = countryRegion;
    }
    public get countryRegion(): Array<string> | undefined {
        return this['country_region'];
    }
    public withIdType(idType: Array<string>): IdDocumentRequestBody {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: Array<string>  | undefined) {
        this['id_type'] = idType;
    }
    public get idType(): Array<string> | undefined {
        return this['id_type'];
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): IdDocumentRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean  | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage(): boolean | undefined {
        return this['return_portrait_image'];
    }
}