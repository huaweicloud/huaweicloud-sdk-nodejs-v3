

export class BatchUpdateClusterResourceRequestBody {
    private 'operate_all'?: boolean;
    private 'cluster_ids'?: Array<string>;
    public mode?: string;
    private 'cpu_limit'?: string;
    private 'mem_limit'?: string;
    public constructor(operateAll?: boolean, mode?: string, cpuLimit?: string, memLimit?: string) { 
        this['operate_all'] = operateAll;
        this['mode'] = mode;
        this['cpu_limit'] = cpuLimit;
        this['mem_limit'] = memLimit;
    }
    public withOperateAll(operateAll: boolean): BatchUpdateClusterResourceRequestBody {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withClusterIds(clusterIds: Array<string>): BatchUpdateClusterResourceRequestBody {
        this['cluster_ids'] = clusterIds;
        return this;
    }
    public set clusterIds(clusterIds: Array<string>  | undefined) {
        this['cluster_ids'] = clusterIds;
    }
    public get clusterIds(): Array<string> | undefined {
        return this['cluster_ids'];
    }
    public withMode(mode: string): BatchUpdateClusterResourceRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withCpuLimit(cpuLimit: string): BatchUpdateClusterResourceRequestBody {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemLimit(memLimit: string): BatchUpdateClusterResourceRequestBody {
        this['mem_limit'] = memLimit;
        return this;
    }
    public set memLimit(memLimit: string  | undefined) {
        this['mem_limit'] = memLimit;
    }
    public get memLimit(): string | undefined {
        return this['mem_limit'];
    }
}