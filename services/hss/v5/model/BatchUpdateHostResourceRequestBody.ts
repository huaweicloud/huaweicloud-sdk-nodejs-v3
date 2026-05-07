

export class BatchUpdateHostResourceRequestBody {
    private 'operate_all'?: boolean;
    private 'host_ids'?: Array<string>;
    public mode?: string;
    private 'cpu_limit'?: string;
    private 'mem_limit'?: string;
    public constructor(operateAll?: boolean, mode?: string, cpuLimit?: string, memLimit?: string) { 
        this['operate_all'] = operateAll;
        this['mode'] = mode;
        this['cpu_limit'] = cpuLimit;
        this['mem_limit'] = memLimit;
    }
    public withOperateAll(operateAll: boolean): BatchUpdateHostResourceRequestBody {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withHostIds(hostIds: Array<string>): BatchUpdateHostResourceRequestBody {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withMode(mode: string): BatchUpdateHostResourceRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withCpuLimit(cpuLimit: string): BatchUpdateHostResourceRequestBody {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemLimit(memLimit: string): BatchUpdateHostResourceRequestBody {
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