import { CpuOptions } from './CpuOptions';
import { ResizeServerExtendParam } from './ResizeServerExtendParam';


export class ResizePrePaidServerOption {
    public flavorRef?: string;
    private 'dedicated_host_id'?: string;
    public extendparam?: ResizeServerExtendParam;
    public mode?: string;
    private 'cpu_options'?: CpuOptions;
    public constructor(flavorRef?: string) { 
        this['flavorRef'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): ResizePrePaidServerOption {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): ResizePrePaidServerOption {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withExtendparam(extendparam: ResizeServerExtendParam): ResizePrePaidServerOption {
        this['extendparam'] = extendparam;
        return this;
    }
    public withMode(mode: string): ResizePrePaidServerOption {
        this['mode'] = mode;
        return this;
    }
    public withCpuOptions(cpuOptions: CpuOptions): ResizePrePaidServerOption {
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