import { AscendInfo } from './AscendInfo';
import { BillingInfo } from './BillingInfo';
import { GPUInfo } from './GPUInfo';


export class NotebookFlavor {
    public arch?: NotebookFlavorArchEnum | string;
    public ascend?: AscendInfo;
    public billing?: BillingInfo;
    public category?: NotebookFlavorCategoryEnum | string;
    public description?: string;
    public feature?: NotebookFlavorFeatureEnum | string;
    public free?: boolean;
    public gpu?: GPUInfo;
    public id?: string;
    public memory?: number;
    public name?: string;
    private 'sold_out'?: boolean;
    public storages?: Array<NotebookFlavorStoragesEnum> | Array<string>;
    public vcpus?: number;
    private 'evs_max_size'?: string;
    private 'evs_sku_code'?: string;
    private 'grow_support_type'?: string;
    public constructor() { 
    }
    public withArch(arch: NotebookFlavorArchEnum | string): NotebookFlavor {
        this['arch'] = arch;
        return this;
    }
    public withAscend(ascend: AscendInfo): NotebookFlavor {
        this['ascend'] = ascend;
        return this;
    }
    public withBilling(billing: BillingInfo): NotebookFlavor {
        this['billing'] = billing;
        return this;
    }
    public withCategory(category: NotebookFlavorCategoryEnum | string): NotebookFlavor {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): NotebookFlavor {
        this['description'] = description;
        return this;
    }
    public withFeature(feature: NotebookFlavorFeatureEnum | string): NotebookFlavor {
        this['feature'] = feature;
        return this;
    }
    public withFree(free: boolean): NotebookFlavor {
        this['free'] = free;
        return this;
    }
    public withGpu(gpu: GPUInfo): NotebookFlavor {
        this['gpu'] = gpu;
        return this;
    }
    public withId(id: string): NotebookFlavor {
        this['id'] = id;
        return this;
    }
    public withMemory(memory: number): NotebookFlavor {
        this['memory'] = memory;
        return this;
    }
    public withName(name: string): NotebookFlavor {
        this['name'] = name;
        return this;
    }
    public withSoldOut(soldOut: boolean): NotebookFlavor {
        this['sold_out'] = soldOut;
        return this;
    }
    public set soldOut(soldOut: boolean  | undefined) {
        this['sold_out'] = soldOut;
    }
    public get soldOut(): boolean | undefined {
        return this['sold_out'];
    }
    public withStorages(storages: Array<NotebookFlavorStoragesEnum> | Array<string>): NotebookFlavor {
        this['storages'] = storages;
        return this;
    }
    public withVcpus(vcpus: number): NotebookFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withEvsMaxSize(evsMaxSize: string): NotebookFlavor {
        this['evs_max_size'] = evsMaxSize;
        return this;
    }
    public set evsMaxSize(evsMaxSize: string  | undefined) {
        this['evs_max_size'] = evsMaxSize;
    }
    public get evsMaxSize(): string | undefined {
        return this['evs_max_size'];
    }
    public withEvsSkuCode(evsSkuCode: string): NotebookFlavor {
        this['evs_sku_code'] = evsSkuCode;
        return this;
    }
    public set evsSkuCode(evsSkuCode: string  | undefined) {
        this['evs_sku_code'] = evsSkuCode;
    }
    public get evsSkuCode(): string | undefined {
        return this['evs_sku_code'];
    }
    public withGrowSupportType(growSupportType: string): NotebookFlavor {
        this['grow_support_type'] = growSupportType;
        return this;
    }
    public set growSupportType(growSupportType: string  | undefined) {
        this['grow_support_type'] = growSupportType;
    }
    public get growSupportType(): string | undefined {
        return this['grow_support_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotebookFlavorArchEnum {
    X86_64 = 'x86_64',
    AARCH64 = 'aarch64'
}
/**
    * @export
    * @enum {string}
    */
export enum NotebookFlavorCategoryEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum NotebookFlavorFeatureEnum {
    DEFAULT = 'DEFAULT',
    NOTEBOOK = 'NOTEBOOK'
}
/**
    * @export
    * @enum {string}
    */
export enum NotebookFlavorStoragesEnum {
    EFS = 'EFS',
    EFS_DEDICATED = 'EFS_DEDICATED',
    EVS = 'EVS',
    OBS = 'OBS',
    OBSFS = 'OBSFS'
}
