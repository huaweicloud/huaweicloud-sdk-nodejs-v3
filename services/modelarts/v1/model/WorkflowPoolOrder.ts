import { SkuInfo } from './SkuInfo';


export class WorkflowPoolOrder {
    public id?: string;
    public sku?: SkuInfo;
    private 'sku_count'?: string;
    public constructor(sku?: SkuInfo, skuCount?: string) { 
        this['sku'] = sku;
        this['sku_count'] = skuCount;
    }
    public withId(id: string): WorkflowPoolOrder {
        this['id'] = id;
        return this;
    }
    public withSku(sku: SkuInfo): WorkflowPoolOrder {
        this['sku'] = sku;
        return this;
    }
    public withSkuCount(skuCount: string): WorkflowPoolOrder {
        this['sku_count'] = skuCount;
        return this;
    }
    public set skuCount(skuCount: string  | undefined) {
        this['sku_count'] = skuCount;
    }
    public get skuCount(): string | undefined {
        return this['sku_count'];
    }
}