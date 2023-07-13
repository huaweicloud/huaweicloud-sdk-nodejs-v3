

export class ContentCompareDetail {
    private 'source_db_name': string | undefined;
    private 'target_db_name': string | undefined;
    private 'source_table_name': string | undefined;
    private 'target_table_name': string | undefined;
    private 'source_row_num': number | undefined;
    private 'target_row_num': number | undefined;
    private 'diff_row_num': number | undefined;
    private 'line_compare_result'?: ContentCompareDetailLineCompareResultEnum | undefined;
    private 'content_compare_result': ContentCompareDetailContentCompareResultEnum | undefined;
    public message?: string;
    public constructor(sourceDbName?: any, targetDbName?: any, sourceTableName?: any, targetTableName?: any, sourceRowNum?: any, targetRowNum?: any, diffRowNum?: any, contentCompareResult?: any) { 
        this['source_db_name'] = sourceDbName;
        this['target_db_name'] = targetDbName;
        this['source_table_name'] = sourceTableName;
        this['target_table_name'] = targetTableName;
        this['source_row_num'] = sourceRowNum;
        this['target_row_num'] = targetRowNum;
        this['diff_row_num'] = diffRowNum;
        this['content_compare_result'] = contentCompareResult;
    }
    public withSourceDbName(sourceDbName: string): ContentCompareDetail {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ContentCompareDetail {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName() {
        return this['target_db_name'];
    }
    public withSourceTableName(sourceTableName: string): ContentCompareDetail {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName() {
        return this['source_table_name'];
    }
    public withTargetTableName(targetTableName: string): ContentCompareDetail {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName() {
        return this['target_table_name'];
    }
    public withSourceRowNum(sourceRowNum: number): ContentCompareDetail {
        this['source_row_num'] = sourceRowNum;
        return this;
    }
    public set sourceRowNum(sourceRowNum: number | undefined) {
        this['source_row_num'] = sourceRowNum;
    }
    public get sourceRowNum() {
        return this['source_row_num'];
    }
    public withTargetRowNum(targetRowNum: number): ContentCompareDetail {
        this['target_row_num'] = targetRowNum;
        return this;
    }
    public set targetRowNum(targetRowNum: number | undefined) {
        this['target_row_num'] = targetRowNum;
    }
    public get targetRowNum() {
        return this['target_row_num'];
    }
    public withDiffRowNum(diffRowNum: number): ContentCompareDetail {
        this['diff_row_num'] = diffRowNum;
        return this;
    }
    public set diffRowNum(diffRowNum: number | undefined) {
        this['diff_row_num'] = diffRowNum;
    }
    public get diffRowNum() {
        return this['diff_row_num'];
    }
    public withLineCompareResult(lineCompareResult: ContentCompareDetailLineCompareResultEnum): ContentCompareDetail {
        this['line_compare_result'] = lineCompareResult;
        return this;
    }
    public set lineCompareResult(lineCompareResult: ContentCompareDetailLineCompareResultEnum | undefined) {
        this['line_compare_result'] = lineCompareResult;
    }
    public get lineCompareResult() {
        return this['line_compare_result'];
    }
    public withContentCompareResult(contentCompareResult: ContentCompareDetailContentCompareResultEnum): ContentCompareDetail {
        this['content_compare_result'] = contentCompareResult;
        return this;
    }
    public set contentCompareResult(contentCompareResult: ContentCompareDetailContentCompareResultEnum | undefined) {
        this['content_compare_result'] = contentCompareResult;
    }
    public get contentCompareResult() {
        return this['content_compare_result'];
    }
    public withMessage(message: string): ContentCompareDetail {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ContentCompareDetailLineCompareResultEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIT = 'TARGET_DB_NOT_EXIT',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
/**
    * @export
    * @enum {string}
    */
export enum ContentCompareDetailContentCompareResultEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIT = 'TARGET_DB_NOT_EXIT',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
