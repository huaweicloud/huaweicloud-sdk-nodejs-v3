

export class ProductInfo {
    public allResourceNames?: Array<string>;
    public cloudServiceType?: string;
    public displayId?: string;
    public productId?: string;
    public productSpecDesc?: string;
    public resourceName?: string;
    public resourceSize?: number;
    public resourceSizeMeasureId?: number;
    public resourceSpecCode?: string;
    public resourceType?: string;
    public usageFactor?: string;
    public usageMeasureId?: number;
    public usageValue?: number;
    public constructor() { 
    }
    public withAllResourceNames(allResourceNames: Array<string>): ProductInfo {
        this['allResourceNames'] = allResourceNames;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): ProductInfo {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withDisplayId(displayId: string): ProductInfo {
        this['displayId'] = displayId;
        return this;
    }
    public withProductId(productId: string): ProductInfo {
        this['productId'] = productId;
        return this;
    }
    public withProductSpecDesc(productSpecDesc: string): ProductInfo {
        this['productSpecDesc'] = productSpecDesc;
        return this;
    }
    public withResourceName(resourceName: string): ProductInfo {
        this['resourceName'] = resourceName;
        return this;
    }
    public withResourceSize(resourceSize: number): ProductInfo {
        this['resourceSize'] = resourceSize;
        return this;
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): ProductInfo {
        this['resourceSizeMeasureId'] = resourceSizeMeasureId;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): ProductInfo {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withResourceType(resourceType: string): ProductInfo {
        this['resourceType'] = resourceType;
        return this;
    }
    public withUsageFactor(usageFactor: string): ProductInfo {
        this['usageFactor'] = usageFactor;
        return this;
    }
    public withUsageMeasureId(usageMeasureId: number): ProductInfo {
        this['usageMeasureId'] = usageMeasureId;
        return this;
    }
    public withUsageValue(usageValue: number): ProductInfo {
        this['usageValue'] = usageValue;
        return this;
    }
}