

export class ImageWhiteListDetailResponseInfoImageInfo {
    public id?: number;
    private 'image_id'?: string;
    private 'image_name'?: string;
    public constructor() { 
    }
    public withId(id: number): ImageWhiteListDetailResponseInfoImageInfo {
        this['id'] = id;
        return this;
    }
    public withImageId(imageId: string): ImageWhiteListDetailResponseInfoImageInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ImageWhiteListDetailResponseInfoImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
}