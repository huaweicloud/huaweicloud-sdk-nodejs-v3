

export class StepImageVo {
    private 'img_id'?: string;
    private 'img_url'?: string;
    public constructor() { 
    }
    public withImgId(imgId: string): StepImageVo {
        this['img_id'] = imgId;
        return this;
    }
    public set imgId(imgId: string  | undefined) {
        this['img_id'] = imgId;
    }
    public get imgId(): string | undefined {
        return this['img_id'];
    }
    public withImgUrl(imgUrl: string): StepImageVo {
        this['img_url'] = imgUrl;
        return this;
    }
    public set imgUrl(imgUrl: string  | undefined) {
        this['img_url'] = imgUrl;
    }
    public get imgUrl(): string | undefined {
        return this['img_url'];
    }
}