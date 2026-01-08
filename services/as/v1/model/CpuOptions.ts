

export class CpuOptions {
    private 'hw_cpu_threads'?: number;
    public constructor() { 
    }
    public withHwCpuThreads(hwCpuThreads: number): CpuOptions {
        this['hw_cpu_threads'] = hwCpuThreads;
        return this;
    }
    public set hwCpuThreads(hwCpuThreads: number  | undefined) {
        this['hw_cpu_threads'] = hwCpuThreads;
    }
    public get hwCpuThreads(): number | undefined {
        return this['hw_cpu_threads'];
    }
}