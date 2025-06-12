

export class TransportationLicenseRequestBody {
    public image?: string;
    public url?: string;
    private 'return_image_location'?: boolean;
    private 'return_adjusted_image'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): TransportationLicenseRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): TransportationLicenseRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnImageLocation(returnImageLocation: boolean): TransportationLicenseRequestBody {
        this['return_image_location'] = returnImageLocation;
        return this;
    }
    public set returnImageLocation(returnImageLocation: boolean  | undefined) {
        this['return_image_location'] = returnImageLocation;
    }
    public get returnImageLocation(): boolean | undefined {
        return this['return_image_location'];
    }
    public withReturnAdjustedImage(returnAdjustedImage: boolean): TransportationLicenseRequestBody {
        this['return_adjusted_image'] = returnAdjustedImage;
        return this;
    }
    public set returnAdjustedImage(returnAdjustedImage: boolean  | undefined) {
        this['return_adjusted_image'] = returnAdjustedImage;
    }
    public get returnAdjustedImage(): boolean | undefined {
        return this['return_adjusted_image'];
    }
}