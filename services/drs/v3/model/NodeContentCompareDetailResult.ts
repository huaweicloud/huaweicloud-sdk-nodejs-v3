

export class NodeContentCompareDetailResult {
    private 'source_db'?: string;
    private 'target_db'?: string;
    private 'source_table_name'?: string;
    private 'target_table_name'?: string;
    private 'source_row_num'?: number;
    private 'target_row_num'?: number;
    private 'difference_row_num'?: number;
    private 'line_compare_result'?: boolean;
    private 'content_compare_result'?: boolean;
    public message?: string;
    private 'compare_line_config_filter'?: string;
    public constructor() { 
    }
    public withSourceDb(sourceDb: string): NodeContentCompareDetailResult {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: string  | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb(): string | undefined {
        return this['source_db'];
    }
    public withTargetDb(targetDb: string): NodeContentCompareDetailResult {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: string  | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb(): string | undefined {
        return this['target_db'];
    }
    public withSourceTableName(sourceTableName: string): NodeContentCompareDetailResult {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withTargetTableName(targetTableName: string): NodeContentCompareDetailResult {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withSourceRowNum(sourceRowNum: number): NodeContentCompareDetailResult {
        this['source_row_num'] = sourceRowNum;
        return this;
    }
    public set sourceRowNum(sourceRowNum: number  | undefined) {
        this['source_row_num'] = sourceRowNum;
    }
    public get sourceRowNum(): number | undefined {
        return this['source_row_num'];
    }
    public withTargetRowNum(targetRowNum: number): NodeContentCompareDetailResult {
        this['target_row_num'] = targetRowNum;
        return this;
    }
    public set targetRowNum(targetRowNum: number  | undefined) {
        this['target_row_num'] = targetRowNum;
    }
    public get targetRowNum(): number | undefined {
        return this['target_row_num'];
    }
    public withDifferenceRowNum(differenceRowNum: number): NodeContentCompareDetailResult {
        this['difference_row_num'] = differenceRowNum;
        return this;
    }
    public set differenceRowNum(differenceRowNum: number  | undefined) {
        this['difference_row_num'] = differenceRowNum;
    }
    public get differenceRowNum(): number | undefined {
        return this['difference_row_num'];
    }
    public withLineCompareResult(lineCompareResult: boolean): NodeContentCompareDetailResult {
        this['line_compare_result'] = lineCompareResult;
        return this;
    }
    public set lineCompareResult(lineCompareResult: boolean  | undefined) {
        this['line_compare_result'] = lineCompareResult;
    }
    public get lineCompareResult(): boolean | undefined {
        return this['line_compare_result'];
    }
    public withContentCompareResult(contentCompareResult: boolean): NodeContentCompareDetailResult {
        this['content_compare_result'] = contentCompareResult;
        return this;
    }
    public set contentCompareResult(contentCompareResult: boolean  | undefined) {
        this['content_compare_result'] = contentCompareResult;
    }
    public get contentCompareResult(): boolean | undefined {
        return this['content_compare_result'];
    }
    public withMessage(message: string): NodeContentCompareDetailResult {
        this['message'] = message;
        return this;
    }
    public withCompareLineConfigFilter(compareLineConfigFilter: string): NodeContentCompareDetailResult {
        this['compare_line_config_filter'] = compareLineConfigFilter;
        return this;
    }
    public set compareLineConfigFilter(compareLineConfigFilter: string  | undefined) {
        this['compare_line_config_filter'] = compareLineConfigFilter;
    }
    public get compareLineConfigFilter(): string | undefined {
        return this['compare_line_config_filter'];
    }
}