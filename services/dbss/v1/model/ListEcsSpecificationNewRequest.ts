

export class ListEcsSpecificationNewRequest {
    private 'image_business_type'?: number;
    public constructor() { 
    }
    public withImageBusinessType(imageBusinessType: number): ListEcsSpecificationNewRequest {
        this['image_business_type'] = imageBusinessType;
        return this;
    }
    public set imageBusinessType(imageBusinessType: number  | undefined) {
        this['image_business_type'] = imageBusinessType;
    }
    public get imageBusinessType(): number | undefined {
        return this['image_business_type'];
    }
}