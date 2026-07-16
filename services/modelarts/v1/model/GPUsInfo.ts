

export class GPUsInfo {
    public type?: string;
    public gpu?: number;
    private 'gpu_memory'?: string;
    public constructor() { 
    }
    public withType(type: string): GPUsInfo {
        this['type'] = type;
        return this;
    }
    public withGpu(gpu: number): GPUsInfo {
        this['gpu'] = gpu;
        return this;
    }
    public withGpuMemory(gpuMemory: string): GPUsInfo {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: string  | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory(): string | undefined {
        return this['gpu_memory'];
    }
}