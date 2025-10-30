import { RecommendSqlLimitRuleRespRawSql } from './RecommendSqlLimitRuleRespRawSql';


export class RecommendSqlLimitRuleRespSqlLimitInfos {
    private 'raw_sql'?: RecommendSqlLimitRuleRespRawSql;
    private 'average_time'?: number;
    public count?: number;
    public maxTime?: number;
    private 'exe_time'?: number;
    public constructor() { 
    }
    public withRawSql(rawSql: RecommendSqlLimitRuleRespRawSql): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['raw_sql'] = rawSql;
        return this;
    }
    public set rawSql(rawSql: RecommendSqlLimitRuleRespRawSql  | undefined) {
        this['raw_sql'] = rawSql;
    }
    public get rawSql(): RecommendSqlLimitRuleRespRawSql | undefined {
        return this['raw_sql'];
    }
    public withAverageTime(averageTime: number): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['average_time'] = averageTime;
        return this;
    }
    public set averageTime(averageTime: number  | undefined) {
        this['average_time'] = averageTime;
    }
    public get averageTime(): number | undefined {
        return this['average_time'];
    }
    public withCount(count: number): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['count'] = count;
        return this;
    }
    public withMaxTime(maxTime: number): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['maxTime'] = maxTime;
        return this;
    }
    public withExeTime(exeTime: number): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['exe_time'] = exeTime;
        return this;
    }
    public set exeTime(exeTime: number  | undefined) {
        this['exe_time'] = exeTime;
    }
    public get exeTime(): number | undefined {
        return this['exe_time'];
    }
}