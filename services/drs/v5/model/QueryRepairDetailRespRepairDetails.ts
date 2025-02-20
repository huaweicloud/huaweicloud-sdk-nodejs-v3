

export class QueryRepairDetailRespRepairDetails {
    private 'source_meta'?: string;
    private 'target_meta'?: string;
    private 'repair_sql_state'?: number;
    private 'repair_sql_info'?: string;
    public constructor() { 
    }
    public withSourceMeta(sourceMeta: string): QueryRepairDetailRespRepairDetails {
        this['source_meta'] = sourceMeta;
        return this;
    }
    public set sourceMeta(sourceMeta: string  | undefined) {
        this['source_meta'] = sourceMeta;
    }
    public get sourceMeta(): string | undefined {
        return this['source_meta'];
    }
    public withTargetMeta(targetMeta: string): QueryRepairDetailRespRepairDetails {
        this['target_meta'] = targetMeta;
        return this;
    }
    public set targetMeta(targetMeta: string  | undefined) {
        this['target_meta'] = targetMeta;
    }
    public get targetMeta(): string | undefined {
        return this['target_meta'];
    }
    public withRepairSqlState(repairSqlState: number): QueryRepairDetailRespRepairDetails {
        this['repair_sql_state'] = repairSqlState;
        return this;
    }
    public set repairSqlState(repairSqlState: number  | undefined) {
        this['repair_sql_state'] = repairSqlState;
    }
    public get repairSqlState(): number | undefined {
        return this['repair_sql_state'];
    }
    public withRepairSqlInfo(repairSqlInfo: string): QueryRepairDetailRespRepairDetails {
        this['repair_sql_info'] = repairSqlInfo;
        return this;
    }
    public set repairSqlInfo(repairSqlInfo: string  | undefined) {
        this['repair_sql_info'] = repairSqlInfo;
    }
    public get repairSqlInfo(): string | undefined {
        return this['repair_sql_info'];
    }
}