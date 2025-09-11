

export class CountStatisticsBean {
    public period?: string;
    private 'sql_num'?: number;
    public constructor() { 
    }
    public withPeriod(period: string): CountStatisticsBean {
        this['period'] = period;
        return this;
    }
    public withSqlNum(sqlNum: number): CountStatisticsBean {
        this['sql_num'] = sqlNum;
        return this;
    }
    public set sqlNum(sqlNum: number  | undefined) {
        this['sql_num'] = sqlNum;
    }
    public get sqlNum(): number | undefined {
        return this['sql_num'];
    }
}