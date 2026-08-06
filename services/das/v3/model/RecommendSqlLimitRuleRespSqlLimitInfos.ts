import { RecommendSqlLimitRuleRespRawSql } from './RecommendSqlLimitRuleRespRawSql';


export class RecommendSqlLimitRuleRespSqlLimitInfos {
    private 'raw_sql'?: RecommendSqlLimitRuleRespRawSql;
    private 'average_time'?: number;
    public keyword?: string;
    private 'recommend_type'?: string;
    public count?: number;
    private 'max_time'?: number;
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
    public withKeyword(keyword: string): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['keyword'] = keyword;
        return this;
    }
    public withRecommendType(recommendType: string): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['recommend_type'] = recommendType;
        return this;
    }
    public set recommendType(recommendType: string  | undefined) {
        this['recommend_type'] = recommendType;
    }
    public get recommendType(): string | undefined {
        return this['recommend_type'];
    }
    public withCount(count: number): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['count'] = count;
        return this;
    }
    public withMaxTime(maxTime: number): RecommendSqlLimitRuleRespSqlLimitInfos {
        this['max_time'] = maxTime;
        return this;
    }
    public set maxTime(maxTime: number  | undefined) {
        this['max_time'] = maxTime;
    }
    public get maxTime(): number | undefined {
        return this['max_time'];
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