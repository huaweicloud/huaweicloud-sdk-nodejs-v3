import { OfferingStatus } from './OfferingStatus';
import { ProductInfo } from './ProductInfo';
import { SaleCycle } from './SaleCycle';
import { ServerSpec } from './ServerSpec';


export class ServerOffering {
    public id?: string;
    private 'zone_code'?: string;
    private 'scene_code'?: string;
    public status?: OfferingStatus;
    public spec?: ServerSpec;
    private 'product_info'?: ProductInfo;
    private 'sale_cycles'?: Array<SaleCycle>;
    public constructor() { 
    }
    public withId(id: string): ServerOffering {
        this['id'] = id;
        return this;
    }
    public withZoneCode(zoneCode: string): ServerOffering {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withSceneCode(sceneCode: string): ServerOffering {
        this['scene_code'] = sceneCode;
        return this;
    }
    public set sceneCode(sceneCode: string  | undefined) {
        this['scene_code'] = sceneCode;
    }
    public get sceneCode(): string | undefined {
        return this['scene_code'];
    }
    public withStatus(status: OfferingStatus): ServerOffering {
        this['status'] = status;
        return this;
    }
    public withSpec(spec: ServerSpec): ServerOffering {
        this['spec'] = spec;
        return this;
    }
    public withProductInfo(productInfo: ProductInfo): ServerOffering {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withSaleCycles(saleCycles: Array<SaleCycle>): ServerOffering {
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