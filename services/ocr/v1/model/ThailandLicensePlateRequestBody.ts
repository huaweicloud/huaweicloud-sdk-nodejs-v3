

export class ThailandLicensePlateRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): ThailandLicensePlateRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ThailandLicensePlateRequestBody {
        this['url'] = url;
        return this;
    }
}