

export class AcceptanceBillRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): AcceptanceBillRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): AcceptanceBillRequestBody {
        this['url'] = url;
        return this;
    }
}