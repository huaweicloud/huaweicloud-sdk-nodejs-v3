

export class NodeContentCompareOverviewResult {
    private 'source_db'?: string;
    private 'target_db'?: string;
    public status?: number;
    private 'compare_num'?: number;
    private 'compare_end_num'?: number;
    private 'data_inconsistent_num'?: number;
    private 'uncomparable_num'?: number;
    public constructor() { 
    }
    public withSourceDb(sourceDb: string): NodeContentCompareOverviewResult {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: string  | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb(): string | undefined {
        return this['source_db'];
    }
    public withTargetDb(targetDb: string): NodeContentCompareOverviewResult {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: string  | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb(): string | undefined {
        return this['target_db'];
    }
    public withStatus(status: number): NodeContentCompareOverviewResult {
        this['status'] = status;
        return this;
    }
    public withCompareNum(compareNum: number): NodeContentCompareOverviewResult {
        this['compare_num'] = compareNum;
        return this;
    }
    public set compareNum(compareNum: number  | undefined) {
        this['compare_num'] = compareNum;
    }
    public get compareNum(): number | undefined {
        return this['compare_num'];
    }
    public withCompareEndNum(compareEndNum: number): NodeContentCompareOverviewResult {
        this['compare_end_num'] = compareEndNum;
        return this;
    }
    public set compareEndNum(compareEndNum: number  | undefined) {
        this['compare_end_num'] = compareEndNum;
    }
    public get compareEndNum(): number | undefined {
        return this['compare_end_num'];
    }
    public withDataInconsistentNum(dataInconsistentNum: number): NodeContentCompareOverviewResult {
        this['data_inconsistent_num'] = dataInconsistentNum;
        return this;
    }
    public set dataInconsistentNum(dataInconsistentNum: number  | undefined) {
        this['data_inconsistent_num'] = dataInconsistentNum;
    }
    public get dataInconsistentNum(): number | undefined {
        return this['data_inconsistent_num'];
    }
    public withUncomparableNum(uncomparableNum: number): NodeContentCompareOverviewResult {
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