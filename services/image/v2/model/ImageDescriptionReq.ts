

export class ImageDescriptionReq {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): ImageDescriptionReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageDescriptionReq {
        this['url'] = url;
        return this;
    }
}