

export class ProtectionContainerInfo {
    private 'container_name'?: string;
    private 'container_status'?: string;
    private 'image_name'?: string;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    private 'restart_count'?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withContainerName(containerName: string): ProtectionContainerInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerStatus(containerStatus: string): ProtectionContainerInfo {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): string | undefined {
        return this['container_status'];
    }
    public withImageName(imageName: string): ProtectionContainerInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withCpuLimit(cpuLimit: string): ProtectionContainerInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): ProtectionContainerInfo {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withRestartCount(restartCount: string): ProtectionContainerInfo {
        this['restart_count'] = restartCount;
        return this;
    }
    public set restartCount(restartCount: string  | undefined) {
        this['restart_count'] = restartCount;
    }
    public get restartCount(): string | undefined {
        return this['restart_count'];
    }
    public withCreateTime(createTime: number): ProtectionContainerInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}