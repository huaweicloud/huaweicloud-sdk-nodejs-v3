

export class MainContainerAllocatedResources {
    private 'cpu_arch'?: string;
    private 'cpu_core_num'?: number;
    private 'mem_size'?: number;
    private 'accelerator_num'?: number;
    private 'accelerator_type'?: string;
    public constructor() { 
    }
    public withCpuArch(cpuArch: string): MainContainerAllocatedResources {
        this['cpu_arch'] = cpuArch;
        return this;
    }
    public set cpuArch(cpuArch: string  | undefined) {
        this['cpu_arch'] = cpuArch;
    }
    public get cpuArch(): string | undefined {
        return this['cpu_arch'];
    }
    public withCpuCoreNum(cpuCoreNum: number): MainContainerAllocatedResources {
        this['cpu_core_num'] = cpuCoreNum;
        return this;
    }
    public set cpuCoreNum(cpuCoreNum: number  | undefined) {
        this['cpu_core_num'] = cpuCoreNum;
    }
    public get cpuCoreNum(): number | undefined {
        return this['cpu_core_num'];
    }
    public withMemSize(memSize: number): MainContainerAllocatedResources {
        this['mem_size'] = memSize;
        return this;
    }
    public set memSize(memSize: number  | undefined) {
        this['mem_size'] = memSize;
    }
    public get memSize(): number | undefined {
        return this['mem_size'];
    }
    public withAcceleratorNum(acceleratorNum: number): MainContainerAllocatedResources {
        this['accelerator_num'] = acceleratorNum;
        return this;
    }
    public set acceleratorNum(acceleratorNum: number  | undefined) {
        this['accelerator_num'] = acceleratorNum;
    }
    public get acceleratorNum(): number | undefined {
        return this['accelerator_num'];
    }
    public withAcceleratorType(acceleratorType: string): MainContainerAllocatedResources {
        this['accelerator_type'] = acceleratorType;
        return this;
    }
    public set acceleratorType(acceleratorType: string  | undefined) {
        this['accelerator_type'] = acceleratorType;
    }
    public get acceleratorType(): string | undefined {
        return this['accelerator_type'];
    }
}