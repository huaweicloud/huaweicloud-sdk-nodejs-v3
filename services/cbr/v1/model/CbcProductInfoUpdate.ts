

export class CbcProductInfoUpdate {
    public productId?: string;
    public resourceSize?: number;
    public resourceSizeMeasureId?: number;
    public resourceSpecCode?: string;
    public constructor(productId?: string, resourceSize?: number, resourceSpecCode?: string) { 
        this['productId'] = productId;
        this['resourceSize'] = resourceSize;
        this['resourceSpecCode'] = resourceSpecCode;
    }
    public withProductId(productId: string): CbcProductInfoUpdate {
        this['productId'] = productId;
        return this;
    }
    public withResourceSize(resourceSize: number): CbcProductInfoUpdate {
        this['resourceSize'] = resourceSize;
        return this;
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): CbcProductInfoUpdate {
        this['resourceSizeMeasureId'] = resourceSizeMeasureId;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): CbcProductInfoUpdate {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
}