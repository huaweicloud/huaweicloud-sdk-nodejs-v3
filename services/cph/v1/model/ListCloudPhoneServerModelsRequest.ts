

export class ListCloudPhoneServerModelsRequest {
    private 'product_type'?: number;
    public marker?: string;
    public limit?: number;
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
    public withMarker(marker: string): ListCloudPhoneServerModelsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListCloudPhoneServerModelsRequest {
        this['limit'] = limit;
        return this;
    }
}