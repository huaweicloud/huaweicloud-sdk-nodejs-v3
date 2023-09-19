

export class VehicleCertificateRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): VehicleCertificateRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): VehicleCertificateRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnTextLocation(returnTextLocation: boolean): VehicleCertificateRequestBody {
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