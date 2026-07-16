import { AscendInfo } from './AscendInfo';
import { BillingInfo } from './BillingInfo';
import { GPUsInfo } from './GPUsInfo';


export class Flavor {
    public arch?: string;
    public billing?: BillingInfo;
    public category?: string;
    public description?: string;
    private 'evs_max_size'?: string;
    private 'evs_sku_code'?: string;
    public feature?: string;
    public free?: boolean;
    private 'grow_support_type'?: string;
    public id?: string;
    public memory?: string;
    public name?: string;
    private 'sold_out'?: boolean;
    public storages?: Array<string>;
    public vcpus?: number;
    public gpu?: GPUsInfo;
    public ascend?: AscendInfo;
    public constructor() { 
    }
    public withArch(arch: string): Flavor {
        this['arch'] = arch;
        return this;
    }
    public withBilling(billing: BillingInfo): Flavor {
        this['billing'] = billing;
        return this;
    }
    public withCategory(category: string): Flavor {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): Flavor {
        this['description'] = description;
        return this;
    }
    public withEvsMaxSize(evsMaxSize: string): Flavor {
        this['evs_max_size'] = evsMaxSize;
        return this;
    }
    public set evsMaxSize(evsMaxSize: string  | undefined) {
        this['evs_max_size'] = evsMaxSize;
    }
    public get evsMaxSize(): string | undefined {
        return this['evs_max_size'];
    }
    public withEvsSkuCode(evsSkuCode: string): Flavor {
        this['evs_sku_code'] = evsSkuCode;
        return this;
    }
    public set evsSkuCode(evsSkuCode: string  | undefined) {
        this['evs_sku_code'] = evsSkuCode;
    }
    public get evsSkuCode(): string | undefined {
        return this['evs_sku_code'];
    }
    public withFeature(feature: string): Flavor {
        this['feature'] = feature;
        return this;
    }
    public withFree(free: boolean): Flavor {
        this['free'] = free;
        return this;
    }
    public withGrowSupportType(growSupportType: string): Flavor {
        this['grow_support_type'] = growSupportType;
        return this;
    }
    public set growSupportType(growSupportType: string  | undefined) {
        this['grow_support_type'] = growSupportType;
    }
    public get growSupportType(): string | undefined {
        return this['grow_support_type'];
    }
    public withId(id: string): Flavor {
        this['id'] = id;
        return this;
    }
    public withMemory(memory: string): Flavor {
        this['memory'] = memory;
        return this;
    }
    public withName(name: string): Flavor {
        this['name'] = name;
        return this;
    }
    public withSoldOut(soldOut: boolean): Flavor {
        this['sold_out'] = soldOut;
        return this;
    }
    public set soldOut(soldOut: boolean  | undefined) {
        this['sold_out'] = soldOut;
    }
    public get soldOut(): boolean | undefined {
        return this['sold_out'];
    }
    public withStorages(storages: Array<string>): Flavor {
        this['storages'] = storages;
        return this;
    }
    public withVcpus(vcpus: number): Flavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withGpu(gpu: GPUsInfo): Flavor {
        this['gpu'] = gpu;
        return this;
    }
    public withAscend(ascend: AscendInfo): Flavor {
        this['ascend'] = ascend;
        return this;
    }
}