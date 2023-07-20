

export class DriverLicenseRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_issuing_authority'?: boolean;
    private 'return_text_location'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): DriverLicenseRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): DriverLicenseRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): DriverLicenseRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnIssuingAuthority(returnIssuingAuthority: boolean): DriverLicenseRequestBody {
        this['return_issuing_authority'] = returnIssuingAuthority;
        return this;
    }
    public set returnIssuingAuthority(returnIssuingAuthority: boolean  | undefined) {
        this['return_issuing_authority'] = returnIssuingAuthority;
    }
    public get returnIssuingAuthority(): boolean | undefined {
        return this['return_issuing_authority'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): DriverLicenseRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
}