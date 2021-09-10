

export class VinRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): VinRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): VinRequestBody {
        this['url'] = url;
        return this;
    }
}