

export class LicensePlateRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): LicensePlateRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): LicensePlateRequestBody {
        this['url'] = url;
        return this;
    }
}