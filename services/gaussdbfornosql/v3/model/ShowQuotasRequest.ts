

export class ShowQuotasRequest {
    private 'datastore_type'?: string;
    public mode?: string;
    private 'product_type'?: string;
    public constructor() { 
    }
    public withDatastoreType(datastoreType: string): ShowQuotasRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withMode(mode: string): ShowQuotasRequest {
        this['mode'] = mode;
        return this;
    }
    public withProductType(productType: string): ShowQuotasRequest {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
}