

export class ListSqlRecommendRulesResponseResult {
    private 'recommend_type'?: string;
    private 'sql_id'?: string;
    private 'sql_model'?: string;
    private 'sql_keyword'?: string;
    private 'sql_type'?: string;
    public database?: string;
    private 'avg_exec_time'?: number;
    private 'max_exec_time'?: number;
    private 'exec_count'?: number;
    public constructor() { 
    }
    public withRecommendType(recommendType: string): ListSqlRecommendRulesResponseResult {
        this['recommend_type'] = recommendType;
        return this;
    }
    public set recommendType(recommendType: string  | undefined) {
        this['recommend_type'] = recommendType;
    }
    public get recommendType(): string | undefined {
        return this['recommend_type'];
    }
    public withSqlId(sqlId: string): ListSqlRecommendRulesResponseResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlModel(sqlModel: string): ListSqlRecommendRulesResponseResult {
        this['sql_model'] = sqlModel;
        return this;
    }
    public set sqlModel(sqlModel: string  | undefined) {
        this['sql_model'] = sqlModel;
    }
    public get sqlModel(): string | undefined {
        return this['sql_model'];
    }
    public withSqlKeyword(sqlKeyword: string): ListSqlRecommendRulesResponseResult {
        this['sql_keyword'] = sqlKeyword;
        return this;
    }
    public set sqlKeyword(sqlKeyword: string  | undefined) {
        this['sql_keyword'] = sqlKeyword;
    }
    public get sqlKeyword(): string | undefined {
        return this['sql_keyword'];
    }
    public withSqlType(sqlType: string): ListSqlRecommendRulesResponseResult {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withDatabase(database: string): ListSqlRecommendRulesResponseResult {
        this['database'] = database;
        return this;
    }
    public withAvgExecTime(avgExecTime: number): ListSqlRecommendRulesResponseResult {
        this['avg_exec_time'] = avgExecTime;
        return this;
    }
    public set avgExecTime(avgExecTime: number  | undefined) {
        this['avg_exec_time'] = avgExecTime;
    }
    public get avgExecTime(): number | undefined {
        return this['avg_exec_time'];
    }
    public withMaxExecTime(maxExecTime: number): ListSqlRecommendRulesResponseResult {
        this['max_exec_time'] = maxExecTime;
        return this;
    }
    public set maxExecTime(maxExecTime: number  | undefined) {
        this['max_exec_time'] = maxExecTime;
    }
    public get maxExecTime(): number | undefined {
        return this['max_exec_time'];
    }
    public withExecCount(execCount: number): ListSqlRecommendRulesResponseResult {
        this['exec_count'] = execCount;
        return this;
    }
    public set execCount(execCount: number  | undefined) {
        this['exec_count'] = execCount;
    }
    public get execCount(): number | undefined {
        return this['exec_count'];
    }
}