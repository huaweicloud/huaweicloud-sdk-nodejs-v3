

export class ChileIdCardRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): ChileIdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ChileIdCardRequestBody {
        this['url'] = url;
        return this;
    }
}