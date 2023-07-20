

export class LineCompareOverviewInfo {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    public status?: LineCompareOverviewInfoStatusEnum | string;
    public constructor() { 
    }
    public withSourceDbName(sourceDbName: string): LineCompareOverviewInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): LineCompareOverviewInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withStatus(status: LineCompareOverviewInfoStatusEnum | string): LineCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LineCompareOverviewInfoStatusEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIST = 'TARGET_DB_NOT_EXIST',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
