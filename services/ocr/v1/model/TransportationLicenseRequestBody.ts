

export class TransportationLicenseRequestBody {
    public image?: string;
    public url?: string;
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
}