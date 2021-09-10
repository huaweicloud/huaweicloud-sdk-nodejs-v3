

export class BusinessLicenseRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): BusinessLicenseRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): BusinessLicenseRequestBody {
        this['url'] = url;
        return this;
    }
}