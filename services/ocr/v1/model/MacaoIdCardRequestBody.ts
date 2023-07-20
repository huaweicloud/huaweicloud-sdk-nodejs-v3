

export class MacaoIdCardRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_portrait_image'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): MacaoIdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): MacaoIdCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): MacaoIdCardRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): MacaoIdCardRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean  | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage(): boolean | undefined {
        return this['return_portrait_image'];
    }
}