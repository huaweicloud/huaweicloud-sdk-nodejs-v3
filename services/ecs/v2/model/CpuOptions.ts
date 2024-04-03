

export class CpuOptions {
    private 'hw:cpu_threads'?: CpuOptionsHwCpuThreadsEnum | number;
    public constructor() { 
    }
    public withHwCpuThreads(hwCpuThreads: CpuOptionsHwCpuThreadsEnum | number): CpuOptions {
        this['hw:cpu_threads'] = hwCpuThreads;
        return this;
    }
    public set hwCpuThreads(hwCpuThreads: CpuOptionsHwCpuThreadsEnum | number  | undefined) {
        this['hw:cpu_threads'] = hwCpuThreads;
    }
    public get hwCpuThreads(): CpuOptionsHwCpuThreadsEnum | number | undefined {
        return this['hw:cpu_threads'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CpuOptionsHwCpuThreadsEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
