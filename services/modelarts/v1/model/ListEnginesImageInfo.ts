

export class ListEnginesImageInfo {
    private 'cpu_image_url'?: string;
    private 'gpu_image_url'?: string;
    private 'image_version'?: string;
    public constructor() { 
    }
    public withCpuImageUrl(cpuImageUrl: string): ListEnginesImageInfo {
        this['cpu_image_url'] = cpuImageUrl;
        return this;
    }
    public set cpuImageUrl(cpuImageUrl: string  | undefined) {
        this['cpu_image_url'] = cpuImageUrl;
    }
    public get cpuImageUrl(): string | undefined {
        return this['cpu_image_url'];
    }
    public withGpuImageUrl(gpuImageUrl: string): ListEnginesImageInfo {
        this['gpu_image_url'] = gpuImageUrl;
        return this;
    }
    public set gpuImageUrl(gpuImageUrl: string  | undefined) {
        this['gpu_image_url'] = gpuImageUrl;
    }
    public get gpuImageUrl(): string | undefined {
        return this['gpu_image_url'];
    }
    public withImageVersion(imageVersion: string): ListEnginesImageInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
}