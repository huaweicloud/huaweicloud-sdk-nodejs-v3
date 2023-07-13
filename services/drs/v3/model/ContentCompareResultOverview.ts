

export class ContentCompareResultOverview {
    private 'source_db_name': string | undefined;
    private 'target_db_name': string | undefined;
    private 'content_compare_result': ContentCompareResultOverviewContentCompareResultEnum | undefined;
    public constructor(sourceDbName?: any, targetDbName?: any, contentCompareResult?: any) { 
        this['source_db_name'] = sourceDbName;
        this['target_db_name'] = targetDbName;
        this['content_compare_result'] = contentCompareResult;
    }
    public withSourceDbName(sourceDbName: string): ContentCompareResultOverview {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ContentCompareResultOverview {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName() {
        return this['target_db_name'];
    }
    public withContentCompareResult(contentCompareResult: ContentCompareResultOverviewContentCompareResultEnum): ContentCompareResultOverview {
        this['content_compare_result'] = contentCompareResult;
        return this;
    }
    public set contentCompareResult(contentCompareResult: ContentCompareResultOverviewContentCompareResultEnum | undefined) {
        this['content_compare_result'] = contentCompareResult;
    }
    public get contentCompareResult() {
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
