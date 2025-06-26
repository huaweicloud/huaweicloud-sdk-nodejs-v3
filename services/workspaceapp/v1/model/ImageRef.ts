

export class ImageRef {
    public id?: string;
    private 'image_type'?: ImageRefImageTypeEnum | string;
    private 'spce_code'?: string;
    private 'product_id'?: string;
    public constructor(id?: string, imageType?: string) { 
        this['id'] = id;
        this['image_type'] = imageType;
    }
    public withId(id: string): ImageRef {
        this['id'] = id;
        return this;
    }
    public withImageType(imageType: ImageRefImageTypeEnum | string): ImageRef {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: ImageRefImageTypeEnum | string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): ImageRefImageTypeEnum | string | undefined {
        return this['image_type'];
    }
    public withSpceCode(spceCode: string): ImageRef {
        this['spce_code'] = spceCode;
        return this;
    }
    public set spceCode(spceCode: string  | undefined) {
        this['spce_code'] = spceCode;
    }
    public get spceCode(): string | undefined {
        return this['spce_code'];
    }
    public withProductId(productId: string): ImageRef {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageRefImageTypeEnum {
    GOLD = 'gold',
    PUBLIC = 'public',
    PRIVATE = 'private',
    SHARED = 'shared',
    OTHER = 'other'
}
