

export class ListCloudPhoneServerModelsRequest {
    private 'product_type'?: number;
    public constructor() { 
    }
    public withProductType(productType: number): ListCloudPhoneServerModelsRequest {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: number  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): number | undefined {
        return this['product_type'];
    }
}