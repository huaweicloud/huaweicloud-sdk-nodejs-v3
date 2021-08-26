

export class CpuOptions {
    private 'hw:cpu_threads'?: number | undefined;
    public constructor() { 
    }
    public withHwCpuThreads(hwCpuThreads: number): CpuOptions {
        this['hw:cpu_threads'] = hwCpuThreads;
        return this;
    }
    public set hwCpuThreads(hwCpuThreads: number | undefined) {
        this['hw:cpu_threads'] = hwCpuThreads;
    }
    public get hwCpuThreads() {
        return this['hw:cpu_threads'];
    }
}