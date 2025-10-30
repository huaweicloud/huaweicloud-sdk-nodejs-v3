import { ProductInfo } from './ProductInfo';
import { SaleCycle } from './SaleCycle';


export class StorageGearV2 {
    public id?: string;
    public gear?: number;
    private 'storage_type'?: string;
    private 'product_info'?: ProductInfo;
    private 'zone_code'?: string;
    private 'sale_cycles'?: Array<SaleCycle>;
    public constructor() { 
    }
    public withId(id: string): StorageGearV2 {
        this['id'] = id;
        return this;
    }
    public withGear(gear: number): StorageGearV2 {
        this['gear'] = gear;
        return this;
    }
    public withStorageType(storageType: string): StorageGearV2 {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withProductInfo(productInfo: ProductInfo): StorageGearV2 {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withZoneCode(zoneCode: string): StorageGearV2 {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withSaleCycles(saleCycles: Array<SaleCycle>): StorageGearV2 {
        this['sale_cycles'] = saleCycles;
        return this;
    }
    public set saleCycles(saleCycles: Array<SaleCycle>  | undefined) {
        this['sale_cycles'] = saleCycles;
    }
    public get saleCycles(): Array<SaleCycle> | undefined {
        return this['sale_cycles'];
    }
}