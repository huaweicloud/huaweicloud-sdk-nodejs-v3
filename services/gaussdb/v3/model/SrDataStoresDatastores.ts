

export class SrDataStoresDatastores {
    public id?: string;
    public name?: string;
    private 'kernel_version'?: string;
    public constructor() { 
    }
    public withId(id: string): SrDataStoresDatastores {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SrDataStoresDatastores {
        this['name'] = name;
        return this;
    }
    public withKernelVersion(kernelVersion: string): SrDataStoresDatastores {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
}