

export class PoliciesPeripheralsParallelPortRedirection {
    private 'parallel_port_enable'?: boolean;
    public constructor() { 
    }
    public withParallelPortEnable(parallelPortEnable: boolean): PoliciesPeripheralsParallelPortRedirection {
        this['parallel_port_enable'] = parallelPortEnable;
        return this;
    }
    public set parallelPortEnable(parallelPortEnable: boolean  | undefined) {
        this['parallel_port_enable'] = parallelPortEnable;
    }
    public get parallelPortEnable(): boolean | undefined {
        return this['parallel_port_enable'];
    }
}