

export class Cpu {
    public arch?: string;
    private 'core_num'?: number;
    public constructor() { 
    }
    public withArch(arch: string): Cpu {
        this['arch'] = arch;
        return this;
    }
    public withCoreNum(coreNum: number): Cpu {
        this['core_num'] = coreNum;
        return this;
    }
    public set coreNum(coreNum: number  | undefined) {
        this['core_num'] = coreNum;
    }
    public get coreNum(): number | undefined {
        return this['core_num'];
    }
}