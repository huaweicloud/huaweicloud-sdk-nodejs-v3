

export class SQLStatisticsBean {
    private 'delete_num'?: number;
    private 'insert_num'?: number;
    private 'other_num'?: number;
    public period?: string;
    private 'select_num'?: number;
    private 'update_num'?: number;
    public constructor() { 
    }
    public withDeleteNum(deleteNum: number): SQLStatisticsBean {
        this['delete_num'] = deleteNum;
        return this;
    }
    public set deleteNum(deleteNum: number  | undefined) {
        this['delete_num'] = deleteNum;
    }
    public get deleteNum(): number | undefined {
        return this['delete_num'];
    }
    public withInsertNum(insertNum: number): SQLStatisticsBean {
        this['insert_num'] = insertNum;
        return this;
    }
    public set insertNum(insertNum: number  | undefined) {
        this['insert_num'] = insertNum;
    }
    public get insertNum(): number | undefined {
        return this['insert_num'];
    }
    public withOtherNum(otherNum: number): SQLStatisticsBean {
        this['other_num'] = otherNum;
        return this;
    }
    public set otherNum(otherNum: number  | undefined) {
        this['other_num'] = otherNum;
    }
    public get otherNum(): number | undefined {
        return this['other_num'];
    }
    public withPeriod(period: string): SQLStatisticsBean {
        this['period'] = period;
        return this;
    }
    public withSelectNum(selectNum: number): SQLStatisticsBean {
        this['select_num'] = selectNum;
        return this;
    }
    public set selectNum(selectNum: number  | undefined) {
        this['select_num'] = selectNum;
    }
    public get selectNum(): number | undefined {
        return this['select_num'];
    }
    public withUpdateNum(updateNum: number): SQLStatisticsBean {
        this['update_num'] = updateNum;
        return this;
    }
    public set updateNum(updateNum: number  | undefined) {
        this['update_num'] = updateNum;
    }
    public get updateNum(): number | undefined {
        return this['update_num'];
    }
}