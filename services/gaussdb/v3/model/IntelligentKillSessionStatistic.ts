

export class IntelligentKillSessionStatistic {
    public keyword?: string;
    private 'example_sql_text'?: string;
    public ids?: Array<number>;
    public count?: number;
    private 'total_time'?: number;
    private 'avg_time'?: number;
    private 'max_time'?: number;
    public strategy?: string;
    public constructor() { 
    }
    public withKeyword(keyword: string): IntelligentKillSessionStatistic {
        this['keyword'] = keyword;
        return this;
    }
    public withExampleSqlText(exampleSqlText: string): IntelligentKillSessionStatistic {
        this['example_sql_text'] = exampleSqlText;
        return this;
    }
    public set exampleSqlText(exampleSqlText: string  | undefined) {
        this['example_sql_text'] = exampleSqlText;
    }
    public get exampleSqlText(): string | undefined {
        return this['example_sql_text'];
    }
    public withIds(ids: Array<number>): IntelligentKillSessionStatistic {
        this['ids'] = ids;
        return this;
    }
    public withCount(count: number): IntelligentKillSessionStatistic {
        this['count'] = count;
        return this;
    }
    public withTotalTime(totalTime: number): IntelligentKillSessionStatistic {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withAvgTime(avgTime: number): IntelligentKillSessionStatistic {
        this['avg_time'] = avgTime;
        return this;
    }
    public set avgTime(avgTime: number  | undefined) {
        this['avg_time'] = avgTime;
    }
    public get avgTime(): number | undefined {
        return this['avg_time'];
    }
    public withMaxTime(maxTime: number): IntelligentKillSessionStatistic {
        this['max_time'] = maxTime;
        return this;
    }
    public set maxTime(maxTime: number  | undefined) {
        this['max_time'] = maxTime;
    }
    public get maxTime(): number | undefined {
        return this['max_time'];
    }
    public withStrategy(strategy: string): IntelligentKillSessionStatistic {
        this['strategy'] = strategy;
        return this;
    }
}