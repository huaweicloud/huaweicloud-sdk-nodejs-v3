import { ProductInfo } from './ProductInfo';


export class ProductOrderInfo {
    public tenantId?: string;
    public periodType?: string;
    public periodNum?: number;
    public resourceId?: string;
    public productInfo?: ProductInfo;
    public constructor() { 
    }
    public withTenantId(tenantId: string): ProductOrderInfo {
        this['tenantId'] = tenantId;
        return this;
    }
    public withPeriodType(periodType: string): ProductOrderInfo {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): ProductOrderInfo {
        this['periodNum'] = periodNum;
        return this;
    }
    public withResourceId(resourceId: string): ProductOrderInfo {
        this['resourceId'] = resourceId;
        return this;
    }
    public withProductInfo(productInfo: ProductInfo): ProductOrderInfo {
        this['productInfo'] = productInfo;
        return this;
    }
}