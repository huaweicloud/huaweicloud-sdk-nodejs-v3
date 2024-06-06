

export class NodeDetail {
    private 'running_status'?: string;
    private 'cpu_usage'?: string;
    private 'memory_usage'?: string;
    private 'disk_usage'?: string;
    private 'total_memory'?: string;
    private 'available_memory'?: string;
    private 'total_hard_disk_space'?: string;
    private 'available_hard_disk_space'?: string;
    private 'network_read'?: string;
    private 'network_write'?: string;
    public constructor() { 
    }
    public withRunningStatus(runningStatus: string): NodeDetail {
        this['running_status'] = runningStatus;
        return this;
    }
    public set runningStatus(runningStatus: string  | undefined) {
        this['running_status'] = runningStatus;
    }
    public get runningStatus(): string | undefined {
        return this['running_status'];
    }
    public withCpuUsage(cpuUsage: string): NodeDetail {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: string  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): string | undefined {
        return this['cpu_usage'];
    }
    public withMemoryUsage(memoryUsage: string): NodeDetail {
        this['memory_usage'] = memoryUsage;
        return this;
    }
    public set memoryUsage(memoryUsage: string  | undefined) {
        this['memory_usage'] = memoryUsage;
    }
    public get memoryUsage(): string | undefined {
        return this['memory_usage'];
    }
    public withDiskUsage(diskUsage: string): NodeDetail {
        this['disk_usage'] = diskUsage;
        return this;
    }
    public set diskUsage(diskUsage: string  | undefined) {
        this['disk_usage'] = diskUsage;
    }
    public get diskUsage(): string | undefined {
        return this['disk_usage'];
    }
    public withTotalMemory(totalMemory: string): NodeDetail {
        this['total_memory'] = totalMemory;
        return this;
    }
    public set totalMemory(totalMemory: string  | undefined) {
        this['total_memory'] = totalMemory;
    }
    public get totalMemory(): string | undefined {
        return this['total_memory'];
    }
    public withAvailableMemory(availableMemory: string): NodeDetail {
        this['available_memory'] = availableMemory;
        return this;
    }
    public set availableMemory(availableMemory: string  | undefined) {
        this['available_memory'] = availableMemory;
    }
    public get availableMemory(): string | undefined {
        return this['available_memory'];
    }
    public withTotalHardDiskSpace(totalHardDiskSpace: string): NodeDetail {
        this['total_hard_disk_space'] = totalHardDiskSpace;
        return this;
    }
    public set totalHardDiskSpace(totalHardDiskSpace: string  | undefined) {
        this['total_hard_disk_space'] = totalHardDiskSpace;
    }
    public get totalHardDiskSpace(): string | undefined {
        return this['total_hard_disk_space'];
    }
    public withAvailableHardDiskSpace(availableHardDiskSpace: string): NodeDetail {
        this['available_hard_disk_space'] = availableHardDiskSpace;
        return this;
    }
    public set availableHardDiskSpace(availableHardDiskSpace: string  | undefined) {
        this['available_hard_disk_space'] = availableHardDiskSpace;
    }
    public get availableHardDiskSpace(): string | undefined {
        return this['available_hard_disk_space'];
    }
    public withNetworkRead(networkRead: string): NodeDetail {
        this['network_read'] = networkRead;
        return this;
    }
    public set networkRead(networkRead: string  | undefined) {
        this['network_read'] = networkRead;
    }
    public get networkRead(): string | undefined {
        return this['network_read'];
    }
    public withNetworkWrite(networkWrite: string): NodeDetail {
        this['network_write'] = networkWrite;
        return this;
    }
    public set networkWrite(networkWrite: string  | undefined) {
        this['network_write'] = networkWrite;
    }
    public get networkWrite(): string | undefined {
        return this['network_write'];
    }
}