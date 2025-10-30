import { NetworkDeviceSpec } from './NetworkDeviceSpec';
import { OfferingStatus } from './OfferingStatus';
import { ProductInfo } from './ProductInfo';
import { SaleCycle } from './SaleCycle';


export class NetworkDeviceOffering {
    public id?: string;
    private 'zone_code'?: string;
    private 'scene_code'?: string;
    public status?: OfferingStatus;
    public spec?: NetworkDeviceSpec;
    private 'product_info'?: ProductInfo;
    private 'sale_cycles'?: Array<SaleCycle>;
    public constructor() { 
    }
    public withId(id: string): NetworkDeviceOffering {
        this['id'] = id;
        return this;
    }
    public withZoneCode(zoneCode: string): NetworkDeviceOffering {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withSceneCode(sceneCode: string): NetworkDeviceOffering {
        this['scene_code'] = sceneCode;
        return this;
    }
    public set sceneCode(sceneCode: string  | undefined) {
        this['scene_code'] = sceneCode;
    }
    public get sceneCode(): string | undefined {
        return this['scene_code'];
    }
    public withStatus(status: OfferingStatus): NetworkDeviceOffering {
        this['status'] = status;
        return this;
    }
    public withSpec(spec: NetworkDeviceSpec): NetworkDeviceOffering {
        this['spec'] = spec;
        return this;
    }
    public withProductInfo(productInfo: ProductInfo): NetworkDeviceOffering {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withSaleCycles(saleCycles: Array<SaleCycle>): NetworkDeviceOffering {
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