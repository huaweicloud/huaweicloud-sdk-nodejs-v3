

export class TableLineCompareDetailInfo {
    private 'source_table_name'?: string;
    private 'source_row_num'?: string;
    private 'target_table_name'?: string;
    private 'target_row_num'?: string;
    private 'difference_row_num'?: string;
    public status?: TableLineCompareDetailInfoStatusEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withSourceTableName(sourceTableName: string): TableLineCompareDetailInfo {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withSourceRowNum(sourceRowNum: string): TableLineCompareDetailInfo {
        this['source_row_num'] = sourceRowNum;
        return this;
    }
    public set sourceRowNum(sourceRowNum: string  | undefined) {
        this['source_row_num'] = sourceRowNum;
    }
    public get sourceRowNum(): string | undefined {
        return this['source_row_num'];
    }
    public withTargetTableName(targetTableName: string): TableLineCompareDetailInfo {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withTargetRowNum(targetRowNum: string): TableLineCompareDetailInfo {
        this['target_row_num'] = targetRowNum;
        return this;
    }
    public set targetRowNum(targetRowNum: string  | undefined) {
        this['target_row_num'] = targetRowNum;
    }
    public get targetRowNum(): string | undefined {
        return this['target_row_num'];
    }
    public withDifferenceRowNum(differenceRowNum: string): TableLineCompareDetailInfo {
        this['difference_row_num'] = differenceRowNum;
        return this;
    }
    public set differenceRowNum(differenceRowNum: string  | undefined) {
        this['difference_row_num'] = differenceRowNum;
    }
    public get differenceRowNum(): string | undefined {
        return this['difference_row_num'];
    }
    public withStatus(status: TableLineCompareDetailInfoStatusEnum | string): TableLineCompareDetailInfo {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): TableLineCompareDetailInfo {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TableLineCompareDetailInfoStatusEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIST = 'TARGET_DB_NOT_EXIST',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
