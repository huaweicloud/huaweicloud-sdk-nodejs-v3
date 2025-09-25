

export class AddImageWhiteListsRequestBodyImageInfo {
    public id?: number;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'image_type'?: string;
    public constructor() { 
    }
    public withId(id: number): AddImageWhiteListsRequestBodyImageInfo {
        this['id'] = id;
        return this;
    }
    public withImageId(imageId: string): AddImageWhiteListsRequestBodyImageInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): AddImageWhiteListsRequestBodyImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageType(imageType: string): AddImageWhiteListsRequestBodyImageInfo {
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