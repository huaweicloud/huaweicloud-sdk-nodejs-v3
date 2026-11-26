

export class CreateWorkloadAccessTokenRequestBody {
    private 'workload_name'?: string;
    public constructor(workloadName?: string) { 
        this['workload_name'] = workloadName;
    }
    public withWorkloadName(workloadName: string): CreateWorkloadAccessTokenRequestBody {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
}