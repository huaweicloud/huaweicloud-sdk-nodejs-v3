import { CpuOptions } from './CpuOptions';
import { Promotion } from './Promotion';
import { ServerId } from './ServerId';


export class BatchResizeServersOption {
    public flavorRef?: string;
    public servers?: Array<ServerId>;
    private 'cpu_options'?: CpuOptions;
    public mode?: string;
    public promotion?: Promotion;
    public constructor() { 
    }
    public withFlavorRef(flavorRef: string): BatchResizeServersOption {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withServers(servers: Array<ServerId>): BatchResizeServersOption {
        this['servers'] = servers;
        return this;
    }
    public withCpuOptions(cpuOptions: CpuOptions): BatchResizeServersOption {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions  | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions(): CpuOptions | undefined {
        return this['cpu_options'];
    }
    public withMode(mode: string): BatchResizeServersOption {
        this['mode'] = mode;
        return this;
    }
    public withPromotion(promotion: Promotion): BatchResizeServersOption {
        this['promotion'] = promotion;
        return this;
    }
}