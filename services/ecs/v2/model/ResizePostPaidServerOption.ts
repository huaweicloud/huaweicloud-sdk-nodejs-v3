import { CpuOptions } from './CpuOptions';


export class ResizePostPaidServerOption {
    public flavorRef?: string;
    public mode?: string;
    private 'cpu_options'?: CpuOptions;
    public constructor(flavorRef?: string) { 
        this['flavorRef'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): ResizePostPaidServerOption {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withMode(mode: string): ResizePostPaidServerOption {
        this['mode'] = mode;
        return this;
    }
    public withCpuOptions(cpuOptions: CpuOptions): ResizePostPaidServerOption {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions  | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions(): CpuOptions | undefined {
        return this['cpu_options'];
    }
}