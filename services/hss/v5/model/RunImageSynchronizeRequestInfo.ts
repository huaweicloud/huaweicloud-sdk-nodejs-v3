

export class RunImageSynchronizeRequestInfo {
    private 'image_type'?: string;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withImageType(imageType: string): RunImageSynchronizeRequestInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
}