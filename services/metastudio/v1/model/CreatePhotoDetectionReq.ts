

export class CreatePhotoDetectionReq {
    private 'human_image'?: string;
    public constructor(humanImage?: string) { 
        this['human_image'] = humanImage;
    }
    public withHumanImage(humanImage: string): CreatePhotoDetectionReq {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
}