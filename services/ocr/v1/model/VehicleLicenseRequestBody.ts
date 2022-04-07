

export class VehicleLicenseRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_issuing_authority'?: boolean | undefined;
    private 'return_text_location'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): VehicleLicenseRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): VehicleLicenseRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): VehicleLicenseRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnIssuingAuthority(returnIssuingAuthority: boolean): VehicleLicenseRequestBody {
        this['return_issuing_authority'] = returnIssuingAuthority;
        return this;
    }
    public set returnIssuingAuthority(returnIssuingAuthority: boolean | undefined) {
        this['return_issuing_authority'] = returnIssuingAuthority;
    }
    public get returnIssuingAuthority() {
        return this['return_issuing_authority'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): VehicleLicenseRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation() {
        return this['return_text_location'];
    }
}