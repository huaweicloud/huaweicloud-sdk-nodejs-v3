

export class TableLineCompareResultInfo {
    private 'source_table_name'?: string;
    private 'source_row_num'?: number;
    private 'target_table_name'?: string;
    private 'target_row_num'?: number;
    private 'difference_row_num'?: number;
    public status?: number;
    private 'compare_line_config_filter'?: string;
    public constructor() { 
    }
    public withSourceTableName(sourceTableName: string): TableLineCompareResultInfo {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withSourceRowNum(sourceRowNum: number): TableLineCompareResultInfo {
        this['source_row_num'] = sourceRowNum;
        return this;
    }
    public set sourceRowNum(sourceRowNum: number  | undefined) {
        this['source_row_num'] = sourceRowNum;
    }
    public get sourceRowNum(): number | undefined {
        return this['source_row_num'];
    }
    public withTargetTableName(targetTableName: string): TableLineCompareResultInfo {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withTargetRowNum(targetRowNum: number): TableLineCompareResultInfo {
        this['target_row_num'] = targetRowNum;
        return this;
    }
    public set targetRowNum(targetRowNum: number  | undefined) {
        this['target_row_num'] = targetRowNum;
    }
    public get targetRowNum(): number | undefined {
        return this['target_row_num'];
    }
    public withDifferenceRowNum(differenceRowNum: number): TableLineCompareResultInfo {
        this['difference_row_num'] = differenceRowNum;
        return this;
    }
    public set differenceRowNum(differenceRowNum: number  | undefined) {
        this['difference_row_num'] = differenceRowNum;
    }
    public get differenceRowNum(): number | undefined {
        return this['difference_row_num'];
    }
    public withStatus(status: number): TableLineCompareResultInfo {
        this['status'] = status;
        return this;
    }
    public withCompareLineConfigFilter(compareLineConfigFilter: string): TableLineCompareResultInfo {
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