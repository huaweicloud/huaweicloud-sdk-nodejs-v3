import { SqlFilterRulePattern } from './SqlFilterRulePattern';


export class SqlFilterRule {
    private 'sql_type'?: string;
    public patterns?: Array<SqlFilterRulePattern>;
    public constructor(sqlType?: string, patterns?: Array<SqlFilterRulePattern>) { 
        this['sql_type'] = sqlType;
        this['patterns'] = patterns;
    }
    public withSqlType(sqlType: string): SqlFilterRule {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withPatterns(patterns: Array<SqlFilterRulePattern>): SqlFilterRule {
        this['patterns'] = patterns;
        return this;
    }
}