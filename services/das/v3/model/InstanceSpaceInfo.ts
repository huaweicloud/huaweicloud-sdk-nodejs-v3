

export class InstanceSpaceInfo {
    private 'total_size'?: number;
    private 'used_size'?: number;
    private 'data_size'?: number;
    private 'log_size'?: number;
    private 'avg_daily_growth'?: number;
    private 'last_result_time'?: number;
    public constructor() { 
    }
    public withTotalSize(totalSize: number): InstanceSpaceInfo {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withUsedSize(usedSize: number): InstanceSpaceInfo {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
    public withDataSize(dataSize: number): InstanceSpaceInfo {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
    public withLogSize(logSize: number): InstanceSpaceInfo {
        this['log_size'] = logSize;
        return this;
    }
    public set logSize(logSize: number  | undefined) {
        this['log_size'] = logSize;
    }
    public get logSize(): number | undefined {
        return this['log_size'];
    }
    public withAvgDailyGrowth(avgDailyGrowth: number): InstanceSpaceInfo {
        this['avg_daily_growth'] = avgDailyGrowth;
        return this;
    }
    public set avgDailyGrowth(avgDailyGrowth: number  | undefined) {
        this['avg_daily_growth'] = avgDailyGrowth;
    }
    public get avgDailyGrowth(): number | undefined {
        return this['avg_daily_growth'];
    }
    public withLastResultTime(lastResultTime: number): InstanceSpaceInfo {
        this['last_result_time'] = lastResultTime;
        return this;
    }
    public set lastResultTime(lastResultTime: number  | undefined) {
        this['last_result_time'] = lastResultTime;
    }
    public get lastResultTime(): number | undefined {
        return this['last_result_time'];
    }
}