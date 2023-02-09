

export class ShowChargeModesRequest {
    private 'product_type': string | undefined;
    public status?: string;
    private 'service_area'?: string | undefined;
    public constructor(productType?: any) { 
        this['product_type'] = productType;
    }
    public withProductType(productType: string): ShowChargeModesRequest {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
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
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
}