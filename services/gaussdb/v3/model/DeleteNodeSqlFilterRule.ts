

export class DeleteNodeSqlFilterRule {
    private 'sql_type'?: string;
    public patterns?: Array<string>;
    public constructor(sqlType?: string, patterns?: Array<string>) { 
        this['sql_type'] = sqlType;
        this['patterns'] = patterns;
    }
    public withSqlType(sqlType: string): DeleteNodeSqlFilterRule {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withPatterns(patterns: Array<string>): DeleteNodeSqlFilterRule {
        this['patterns'] = patterns;
        return this;
    }
}