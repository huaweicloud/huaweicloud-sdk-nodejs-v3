

export class Workload {
    private 'workload_id'?: string;
    private 'workload_name'?: string;
    private 'workload_type'?: string;
    public constructor(workloadId?: string, workloadName?: string, workloadType?: string) { 
        this['workload_id'] = workloadId;
        this['workload_name'] = workloadName;
        this['workload_type'] = workloadType;
    }
    public withWorkloadId(workloadId: string): Workload {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
    public withWorkloadName(workloadName: string): Workload {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withWorkloadType(workloadType: string): Workload {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
}