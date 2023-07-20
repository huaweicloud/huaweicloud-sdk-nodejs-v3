

export class ShowChargeModesRequest {
    private 'product_type'?: string;
    public status?: string;
    private 'service_area'?: string;
    public constructor(productType?: string) { 
        this['product_type'] = productType;
    }
    public withProductType(productType: string): ShowChargeModesRequest {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withStatus(status: string): ShowChargeModesRequest {
        this['status'] = status;
        return this;
    }
    public withServiceArea(serviceArea: string): ShowChargeModesRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
}