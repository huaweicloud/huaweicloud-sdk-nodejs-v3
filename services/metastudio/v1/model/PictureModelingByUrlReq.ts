

export class PictureModelingByUrlReq {
    private 'picture_url'?: string;
    private 'style_id'?: string;
    public name?: string;
    private 'notify_url'?: string;
    public constructor(pictureUrl?: string, styleId?: string, name?: string) { 
        this['picture_url'] = pictureUrl;
        this['style_id'] = styleId;
        this['name'] = name;
    }
    public withPictureUrl(pictureUrl: string): PictureModelingByUrlReq {
        this['picture_url'] = pictureUrl;
        return this;
    }
    public set pictureUrl(pictureUrl: string  | undefined) {
        this['picture_url'] = pictureUrl;
    }
    public get pictureUrl(): string | undefined {
        return this['picture_url'];
    }
    public withStyleId(styleId: string): PictureModelingByUrlReq {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withName(name: string): PictureModelingByUrlReq {
        this['name'] = name;
        return this;
    }
    public withNotifyUrl(notifyUrl: string): PictureModelingByUrlReq {
        this['notify_url'] = notifyUrl;
        return this;
    }
    public set notifyUrl(notifyUrl: string  | undefined) {
        this['notify_url'] = notifyUrl;
    }
    public get notifyUrl(): string | undefined {
        return this['notify_url'];
    }
}