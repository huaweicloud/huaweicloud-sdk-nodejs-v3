

export class ContentCompareResultOverview {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    private 'content_compare_result'?: ContentCompareResultOverviewContentCompareResultEnum | string;
    public constructor(sourceDbName?: string, targetDbName?: string, contentCompareResult?: string) { 
        this['source_db_name'] = sourceDbName;
        this['target_db_name'] = targetDbName;
        this['content_compare_result'] = contentCompareResult;
    }
    public withSourceDbName(sourceDbName: string): ContentCompareResultOverview {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ContentCompareResultOverview {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withContentCompareResult(contentCompareResult: ContentCompareResultOverviewContentCompareResultEnum | string): ContentCompareResultOverview {
        this['content_compare_result'] = contentCompareResult;
        return this;
    }
    public set contentCompareResult(contentCompareResult: ContentCompareResultOverviewContentCompareResultEnum | string  | undefined) {
        this['content_compare_result'] = contentCompareResult;
    }
    public get contentCompareResult(): ContentCompareResultOverviewContentCompareResultEnum | string | undefined {
        return this['content_compare_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ContentCompareResultOverviewContentCompareResultEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIT = 'TARGET_DB_NOT_EXIT',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
