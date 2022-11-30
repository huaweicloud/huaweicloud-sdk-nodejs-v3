

export class IdDocumentRequestBody {
    public image?: string;
    public url?: string;
    private 'country_region'?: Array<string> | undefined;
    private 'id_type'?: Array<string> | undefined;
    private 'return_portrait_image'?: boolean | undefined;
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
    public set countryRegion(countryRegion: Array<string> | undefined) {
        this['country_region'] = countryRegion;
    }
    public get countryRegion() {
        return this['country_region'];
    }
    public withIdType(idType: Array<string>): IdDocumentRequestBody {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: Array<string> | undefined) {
        this['id_type'] = idType;
    }
    public get idType() {
        return this['id_type'];
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): IdDocumentRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage() {
        return this['return_portrait_image'];
    }
}