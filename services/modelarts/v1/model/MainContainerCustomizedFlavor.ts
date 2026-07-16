

export class MainContainerCustomizedFlavor {
    private 'cpu_core_num'?: number;
    private 'mem_size'?: number;
    private 'accelerator_num'?: number;
    public constructor() { 
    }
    public withCpuCoreNum(cpuCoreNum: number): MainContainerCustomizedFlavor {
        this['cpu_core_num'] = cpuCoreNum;
        return this;
    }
    public set cpuCoreNum(cpuCoreNum: number  | undefined) {
        this['cpu_core_num'] = cpuCoreNum;
    }
    public get cpuCoreNum(): number | undefined {
        return this['cpu_core_num'];
    }
    public withMemSize(memSize: number): MainContainerCustomizedFlavor {
        this['mem_size'] = memSize;
        return this;
    }
    public set memSize(memSize: number  | undefined) {
        this['mem_size'] = memSize;
    }
    public get memSize(): number | undefined {
        return this['mem_size'];
    }
    public withAcceleratorNum(acceleratorNum: number): MainContainerCustomizedFlavor {
        this['accelerator_num'] = acceleratorNum;
        return this;
    }
    public set acceleratorNum(acceleratorNum: number  | undefined) {
        this['accelerator_num'] = acceleratorNum;
    }
    public get acceleratorNum(): number | undefined {
        return this['accelerator_num'];
    }
}