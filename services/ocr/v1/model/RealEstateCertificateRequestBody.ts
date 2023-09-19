

export class RealEstateCertificateRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): RealEstateCertificateRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): RealEstateCertificateRequestBody {
        this['url'] = url;
        return this;
    }
}