

export class LineCompareDetail {
    private 'source_table_name'?: string;
    private 'target_table_name'?: string;
    private 'source_row_num'?: number;
    private 'target_row_num'?: number;
    private 'diff_row_num'?: number;
    private 'line_compare_result'?: LineCompareDetailLineCompareResultEnum | string;
    public message?: string;
    public constructor(sourceTableName?: string, targetTableName?: string, sourceRowNum?: number, targetRowNum?: number, diffRowNum?: number, lineCompareResult?: string) { 
        this['source_table_name'] = sourceTableName;
        this['target_table_name'] = targetTableName;
        this['source_row_num'] = sourceRowNum;
        this['target_row_num'] = targetRowNum;
        this['diff_row_num'] = diffRowNum;
        this['line_compare_result'] = lineCompareResult;
    }
    public withSourceTableName(sourceTableName: string): LineCompareDetail {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withTargetTableName(targetTableName: string): LineCompareDetail {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withSourceRowNum(sourceRowNum: number): LineCompareDetail {
        this['source_row_num'] = sourceRowNum;
        return this;
    }
    public set sourceRowNum(sourceRowNum: number  | undefined) {
        this['source_row_num'] = sourceRowNum;
    }
    public get sourceRowNum(): number | undefined {
        return this['source_row_num'];
    }
    public withTargetRowNum(targetRowNum: number): LineCompareDetail {
        this['target_row_num'] = targetRowNum;
        return this;
    }
    public set targetRowNum(targetRowNum: number  | undefined) {
        this['target_row_num'] = targetRowNum;
    }
    public get targetRowNum(): number | undefined {
        return this['target_row_num'];
    }
    public withDiffRowNum(diffRowNum: number): LineCompareDetail {
        this['diff_row_num'] = diffRowNum;
        return this;
    }
    public set diffRowNum(diffRowNum: number  | undefined) {
        this['diff_row_num'] = diffRowNum;
    }
    public get diffRowNum(): number | undefined {
        return this['diff_row_num'];
    }
    public withLineCompareResult(lineCompareResult: LineCompareDetailLineCompareResultEnum | string): LineCompareDetail {
        this['line_compare_result'] = lineCompareResult;
        return this;
    }
    public set lineCompareResult(lineCompareResult: LineCompareDetailLineCompareResultEnum | string  | undefined) {
        this['line_compare_result'] = lineCompareResult;
    }
    public get lineCompareResult(): LineCompareDetailLineCompareResultEnum | string | undefined {
        return this['line_compare_result'];
    }
    public withMessage(message: string): LineCompareDetail {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LineCompareDetailLineCompareResultEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIT = 'TARGET_DB_NOT_EXIT',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
