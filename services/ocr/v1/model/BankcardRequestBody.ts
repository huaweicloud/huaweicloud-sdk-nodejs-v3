

export class BankcardRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): BankcardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): BankcardRequestBody {
        this['url'] = url;
        return this;
    }
}