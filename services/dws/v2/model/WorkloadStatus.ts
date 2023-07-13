

export class WorkloadStatus {
    private 'workload_switch': string | undefined;
    private 'max_concurrency_num'?: string | undefined;
    public constructor(workloadSwitch?: any) { 
        this['workload_switch'] = workloadSwitch;
    }
    public withWorkloadSwitch(workloadSwitch: string): WorkloadStatus {
        this['workload_switch'] = workloadSwitch;
        return this;
    }
    public set workloadSwitch(workloadSwitch: string | undefined) {
        this['workload_switch'] = workloadSwitch;
    }
    public get workloadSwitch() {
        return this['workload_switch'];
    }
    public withMaxConcurrencyNum(maxConcurrencyNum: string): WorkloadStatus {
        this['max_concurrency_num'] = maxConcurrencyNum;
        return this;
    }
    public set maxConcurrencyNum(maxConcurrencyNum: string | undefined) {
        this['max_concurrency_num'] = maxConcurrencyNum;
    }
    public get maxConcurrencyNum() {
        return this['max_concurrency_num'];
    }
}