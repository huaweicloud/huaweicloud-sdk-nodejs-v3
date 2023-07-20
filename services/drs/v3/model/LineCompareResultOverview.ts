

export class LineCompareResultOverview {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    private 'line_compare_result'?: LineCompareResultOverviewLineCompareResultEnum | string;
    public constructor(sourceDbName?: string, targetDbName?: string, lineCompareResult?: string) { 
        this['source_db_name'] = sourceDbName;
        this['target_db_name'] = targetDbName;
        this['line_compare_result'] = lineCompareResult;
    }
    public withSourceDbName(sourceDbName: string): LineCompareResultOverview {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): LineCompareResultOverview {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withLineCompareResult(lineCompareResult: LineCompareResultOverviewLineCompareResultEnum | string): LineCompareResultOverview {
        this['line_compare_result'] = lineCompareResult;
        return this;
    }
    public set lineCompareResult(lineCompareResult: LineCompareResultOverviewLineCompareResultEnum | string  | undefined) {
        this['line_compare_result'] = lineCompareResult;
    }
    public get lineCompareResult(): LineCompareResultOverviewLineCompareResultEnum | string | undefined {
        return this['line_compare_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LineCompareResultOverviewLineCompareResultEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIT = 'TARGET_DB_NOT_EXIT',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
