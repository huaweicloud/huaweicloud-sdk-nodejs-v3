

export class NotebookCustomSpec {
    public gpu?: number;
    public cpu?: number;
    public memory?: number;
    private 'gpu_type'?: string;
    public arch?: string;
    public category?: string;
    private 'resource_flavor'?: string;
    public constructor(cpu?: number, memory?: number) { 
        this['cpu'] = cpu;
        this['memory'] = memory;
    }
    public withGpu(gpu: number): NotebookCustomSpec {
        this['gpu'] = gpu;
        return this;
    }
    public withCpu(cpu: number): NotebookCustomSpec {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: number): NotebookCustomSpec {
        this['memory'] = memory;
        return this;
    }
    public withGpuType(gpuType: string): NotebookCustomSpec {
        this['gpu_type'] = gpuType;
        return this;
    }
    public set gpuType(gpuType: string  | undefined) {
        this['gpu_type'] = gpuType;
    }
    public get gpuType(): string | undefined {
        return this['gpu_type'];
    }
    public withArch(arch: string): NotebookCustomSpec {
        this['arch'] = arch;
        return this;
    }
    public withCategory(category: string): NotebookCustomSpec {
        this['category'] = category;
        return this;
    }
    public withResourceFlavor(resourceFlavor: string): NotebookCustomSpec {
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