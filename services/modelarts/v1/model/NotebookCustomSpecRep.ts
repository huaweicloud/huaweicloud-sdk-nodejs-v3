

export class NotebookCustomSpecRep {
    public gpu?: number;
    private 'gpu_type'?: string;
    public cpu?: number;
    public memory?: number;
    public arch?: NotebookCustomSpecRepArchEnum | string;
    public category?: NotebookCustomSpecRepCategoryEnum | string;
    private 'resource_flavor'?: string;
    public constructor(cpu?: number, memory?: number, arch?: string, category?: string) { 
        this['cpu'] = cpu;
        this['memory'] = memory;
        this['arch'] = arch;
        this['category'] = category;
    }
    public withGpu(gpu: number): NotebookCustomSpecRep {
        this['gpu'] = gpu;
        return this;
    }
    public withGpuType(gpuType: string): NotebookCustomSpecRep {
        this['gpu_type'] = gpuType;
        return this;
    }
    public set gpuType(gpuType: string  | undefined) {
        this['gpu_type'] = gpuType;
    }
    public get gpuType(): string | undefined {
        return this['gpu_type'];
    }
    public withCpu(cpu: number): NotebookCustomSpecRep {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: number): NotebookCustomSpecRep {
        this['memory'] = memory;
        return this;
    }
    public withArch(arch: NotebookCustomSpecRepArchEnum | string): NotebookCustomSpecRep {
        this['arch'] = arch;
        return this;
    }
    public withCategory(category: NotebookCustomSpecRepCategoryEnum | string): NotebookCustomSpecRep {
        this['category'] = category;
        return this;
    }
    public withResourceFlavor(resourceFlavor: string): NotebookCustomSpecRep {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotebookCustomSpecRepArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum NotebookCustomSpecRepCategoryEnum {
    CPU = 'CPU',
    GPU = 'GPU'
}
