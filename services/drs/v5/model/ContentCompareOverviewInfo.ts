

export class ContentCompareOverviewInfo {
    private 'source_db'?: string | undefined;
    private 'target_db'?: string | undefined;
    public status?: ContentCompareOverviewInfoStatusEnum;
    private 'compare_result'?: boolean | undefined;
    public constructor() { 
    }
    public withSourceDb(sourceDb: string): ContentCompareOverviewInfo {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: string | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb() {
        return this['source_db'];
    }
    public withTargetDb(targetDb: string): ContentCompareOverviewInfo {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: string | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb() {
        return this['target_db'];
    }
    public withStatus(status: ContentCompareOverviewInfoStatusEnum): ContentCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
    public withCompareResult(compareResult: boolean): ContentCompareOverviewInfo {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: boolean | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult() {
        return this['compare_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ContentCompareOverviewInfoStatusEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIST = 'TARGET_DB_NOT_EXIST',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
