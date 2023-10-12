

export class ColombiaIdCardRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): ColombiaIdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ColombiaIdCardRequestBody {
        this['url'] = url;
        return this;
    }
}