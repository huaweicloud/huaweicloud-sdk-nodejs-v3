

export class SubJobEntities {
    private 'image_id'?: string | undefined;
    private 'image_name'?: string | undefined;
    public constructor() { 
    }
    public withImageId(imageId: string): SubJobEntities {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withImageName(imageName: string): SubJobEntities {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
}