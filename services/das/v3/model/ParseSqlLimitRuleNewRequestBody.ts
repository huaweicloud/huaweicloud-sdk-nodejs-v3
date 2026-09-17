

export class ParseSqlLimitRuleNewRequestBody {
    private 'original_sql'?: string;
    private 'engine_type'?: string;
    private 'use_template'?: boolean;
    private 'keep_operators'?: boolean;
    public type?: string;
    public constructor(originalSql?: string, engineType?: string, useTemplate?: boolean, keepOperators?: boolean, type?: string) { 
        this['original_sql'] = originalSql;
        this['engine_type'] = engineType;
        this['use_template'] = useTemplate;
        this['keep_operators'] = keepOperators;
        this['type'] = type;
    }
    public withOriginalSql(originalSql: string): ParseSqlLimitRuleNewRequestBody {
        this['original_sql'] = originalSql;
        return this;
    }
    public set originalSql(originalSql: string  | undefined) {
        this['original_sql'] = originalSql;
    }
    public get originalSql(): string | undefined {
        return this['original_sql'];
    }
    public withEngineType(engineType: string): ParseSqlLimitRuleNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withUseTemplate(useTemplate: boolean): ParseSqlLimitRuleNewRequestBody {
        this['use_template'] = useTemplate;
        return this;
    }
    public set useTemplate(useTemplate: boolean  | undefined) {
        this['use_template'] = useTemplate;
    }
    public get useTemplate(): boolean | undefined {
        return this['use_template'];
    }
    public withKeepOperators(keepOperators: boolean): ParseSqlLimitRuleNewRequestBody {
        this['keep_operators'] = keepOperators;
        return this;
    }
    public set keepOperators(keepOperators: boolean  | undefined) {
        this['keep_operators'] = keepOperators;
    }
    public get keepOperators(): boolean | undefined {
        return this['keep_operators'];
    }
    public withType(type: string): ParseSqlLimitRuleNewRequestBody {
        this['type'] = type;
        return this;
    }
}