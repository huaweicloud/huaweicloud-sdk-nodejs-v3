

export class DatabaseUsageInfoResp {
    private 'database_name'?: string;
    private 'total_cpu'?: number;
    private 'total_memory'?: number;
    public constructor() { 
    }
    public withDatabaseName(databaseName: string): DatabaseUsageInfoResp {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTotalCpu(totalCpu: number): DatabaseUsageInfoResp {
        this['total_cpu'] = totalCpu;
        return this;
    }
    public set totalCpu(totalCpu: number  | undefined) {
        this['total_cpu'] = totalCpu;
    }
    public get totalCpu(): number | undefined {
        return this['total_cpu'];
    }
    public withTotalMemory(totalMemory: number): DatabaseUsageInfoResp {
        this['total_memory'] = totalMemory;
        return this;
    }
    public set totalMemory(totalMemory: number  | undefined) {
        this['total_memory'] = totalMemory;
    }
    public get totalMemory(): number | undefined {
        return this['total_memory'];
    }
}