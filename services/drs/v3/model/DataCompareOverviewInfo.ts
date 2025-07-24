

export class DataCompareOverviewInfo {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    public status?: number;
    private 'compare_num'?: number;
    private 'compare_end_num'?: number;
    private 'data_inconsistent_num'?: number;
    private 'uncomparable_num'?: number;
    public constructor() { 
    }
    public withSourceDbName(sourceDbName: string): DataCompareOverviewInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): DataCompareOverviewInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withStatus(status: number): DataCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
    public withCompareNum(compareNum: number): DataCompareOverviewInfo {
        this['compare_num'] = compareNum;
        return this;
    }
    public set compareNum(compareNum: number  | undefined) {
        this['compare_num'] = compareNum;
    }
    public get compareNum(): number | undefined {
        return this['compare_num'];
    }
    public withCompareEndNum(compareEndNum: number): DataCompareOverviewInfo {
        this['compare_end_num'] = compareEndNum;
        return this;
    }
    public set compareEndNum(compareEndNum: number  | undefined) {
        this['compare_end_num'] = compareEndNum;
    }
    public get compareEndNum(): number | undefined {
        return this['compare_end_num'];
    }
    public withDataInconsistentNum(dataInconsistentNum: number): DataCompareOverviewInfo {
        this['data_inconsistent_num'] = dataInconsistentNum;
        return this;
    }
    public set dataInconsistentNum(dataInconsistentNum: number  | undefined) {
        this['data_inconsistent_num'] = dataInconsistentNum;
    }
    public get dataInconsistentNum(): number | undefined {
        return this['data_inconsistent_num'];
    }
    public withUncomparableNum(uncomparableNum: number): DataCompareOverviewInfo {
        this['uncomparable_num'] = uncomparableNum;
        return this;
    }
    public set uncomparableNum(uncomparableNum: number  | undefined) {
        this['uncomparable_num'] = uncomparableNum;
    }
    public get uncomparableNum(): number | undefined {
        return this['uncomparable_num'];
    }
}