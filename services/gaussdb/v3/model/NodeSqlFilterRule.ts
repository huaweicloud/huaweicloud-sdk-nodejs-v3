import { NodeSqlFilterRulePattern } from './NodeSqlFilterRulePattern';


export class NodeSqlFilterRule {
    private 'sql_type'?: string;
    public patterns?: Array<NodeSqlFilterRulePattern>;
    public constructor(sqlType?: string, patterns?: Array<NodeSqlFilterRulePattern>) { 
        this['sql_type'] = sqlType;
        this['patterns'] = patterns;
    }
    public withSqlType(sqlType: string): NodeSqlFilterRule {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withPatterns(patterns: Array<NodeSqlFilterRulePattern>): NodeSqlFilterRule {
        this['patterns'] = patterns;
        return this;
    }
}