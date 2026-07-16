import { AscendResource } from './AscendResource';
import { BillingResource } from './BillingResource';
import { GPUResource } from './GPUResource';


export class InferFlavor {
    public arch?: InferFlavorArchEnum | string;
    public ascend?: AscendResource;
    public billing?: BillingResource;
    public category?: InferFlavorCategoryEnum | string;
    public description?: string;
    public feature?: InferFlavorFeatureEnum | string;
    public free?: boolean;
    public gpu?: GPUResource;
    public id?: string;
    public memory?: number;
    public name?: string;
    private 'sold_out'?: boolean;
    public storages?: Array<InferFlavorStoragesEnum> | Array<string>;
    public vcpus?: number;
    private 'evs_max_size'?: string;
    public constructor() { 
    }
    public withArch(arch: InferFlavorArchEnum | string): InferFlavor {
        this['arch'] = arch;
        return this;
    }
    public withAscend(ascend: AscendResource): InferFlavor {
        this['ascend'] = ascend;
        return this;
    }
    public withBilling(billing: BillingResource): InferFlavor {
        this['billing'] = billing;
        return this;
    }
    public withCategory(category: InferFlavorCategoryEnum | string): InferFlavor {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): InferFlavor {
        this['description'] = description;
        return this;
    }
    public withFeature(feature: InferFlavorFeatureEnum | string): InferFlavor {
        this['feature'] = feature;
        return this;
    }
    public withFree(free: boolean): InferFlavor {
        this['free'] = free;
        return this;
    }
    public withGpu(gpu: GPUResource): InferFlavor {
        this['gpu'] = gpu;
        return this;
    }
    public withId(id: string): InferFlavor {
        this['id'] = id;
        return this;
    }
    public withMemory(memory: number): InferFlavor {
        this['memory'] = memory;
        return this;
    }
    public withName(name: string): InferFlavor {
        this['name'] = name;
        return this;
    }
    public withSoldOut(soldOut: boolean): InferFlavor {
        this['sold_out'] = soldOut;
        return this;
    }
    public set soldOut(soldOut: boolean  | undefined) {
        this['sold_out'] = soldOut;
    }
    public get soldOut(): boolean | undefined {
        return this['sold_out'];
    }
    public withStorages(storages: Array<InferFlavorStoragesEnum> | Array<string>): InferFlavor {
        this['storages'] = storages;
        return this;
    }
    public withVcpus(vcpus: number): InferFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withEvsMaxSize(evsMaxSize: string): InferFlavor {
        this['evs_max_size'] = evsMaxSize;
        return this;
    }
    public set evsMaxSize(evsMaxSize: string  | undefined) {
        this['evs_max_size'] = evsMaxSize;
    }
    public get evsMaxSize(): string | undefined {
        return this['evs_max_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InferFlavorArchEnum {
    ARM64 = 'arm64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum InferFlavorCategoryEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum InferFlavorFeatureEnum {
    DEFAULT = 'DEFAULT',
    NOTEBOOK = 'NOTEBOOK'
}
/**
    * @export
    * @enum {string}
    */
export enum InferFlavorStoragesEnum {
    EFS = 'EFS',
    EFS_DEDICATED = 'EFS_DEDICATED',
    EVS = 'EVS',
    OBS = 'OBS',
    OBSFS = 'OBSFS'
}
