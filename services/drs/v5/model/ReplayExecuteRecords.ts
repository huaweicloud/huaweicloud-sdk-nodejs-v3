

export class ReplayExecuteRecords {
    private 'execute_time'?: number;
    private 'finished_sql'?: number;
    private 'abnormal_sql'?: number;
    private 'slow_sql'?: number;
    private 'total_sql'?: number;
    public constructor() { 
    }
    public withExecuteTime(executeTime: number): ReplayExecuteRecords {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
    public withFinishedSql(finishedSql: number): ReplayExecuteRecords {
        this['finished_sql'] = finishedSql;
        return this;
    }
    public set finishedSql(finishedSql: number  | undefined) {
        this['finished_sql'] = finishedSql;
    }
    public get finishedSql(): number | undefined {
        return this['finished_sql'];
    }
    public withAbnormalSql(abnormalSql: number): ReplayExecuteRecords {
        this['abnormal_sql'] = abnormalSql;
        return this;
    }
    public set abnormalSql(abnormalSql: number  | undefined) {
        this['abnormal_sql'] = abnormalSql;
    }
    public get abnormalSql(): number | undefined {
        return this['abnormal_sql'];
    }
    public withSlowSql(slowSql: number): ReplayExecuteRecords {
        this['slow_sql'] = slowSql;
        return this;
    }
    public set slowSql(slowSql: number  | undefined) {
        this['slow_sql'] = slowSql;
    }
    public get slowSql(): number | undefined {
        return this['slow_sql'];
    }
    public withTotalSql(totalSql: number): ReplayExecuteRecords {
        this['total_sql'] = totalSql;
        return this;
    }
    public set totalSql(totalSql: number  | undefined) {
        this['total_sql'] = totalSql;
    }
    public get totalSql(): number | undefined {
        return this['total_sql'];
    }
}