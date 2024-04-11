

export class DataCompareOverviewInfo {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    public status?: number;
    public constructor() { 
    }
    public withSourceDbName(sourceDbName: string): DataCompareOverviewInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): DataCompareOverviewInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withStatus(status: number): DataCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
}