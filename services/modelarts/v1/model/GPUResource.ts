

export class GPUResource {
    public gpu?: number;
    private 'gpu_memory'?: string;
    public type?: string;
    public constructor() { 
    }
    public withGpu(gpu: number): GPUResource {
        this['gpu'] = gpu;
        return this;
    }
    public withGpuMemory(gpuMemory: string): GPUResource {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: string  | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory(): string | undefined {
        return this['gpu_memory'];
    }
    public withType(type: string): GPUResource {
        this['type'] = type;
        return this;
    }
}