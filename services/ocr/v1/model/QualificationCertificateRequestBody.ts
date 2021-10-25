

export class QualificationCertificateRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): QualificationCertificateRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): QualificationCertificateRequestBody {
        this['url'] = url;
        return this;
    }
}