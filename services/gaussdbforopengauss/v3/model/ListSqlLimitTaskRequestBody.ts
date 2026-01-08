

export class ListSqlLimitTaskRequestBody {
    private 'task_scope'?: string;
    private 'limit_type'?: string;
    private 'limit_type_value'?: string;
    private 'task_name'?: string;
    private 'rule_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sql_id'?: string;
    private 'node_ids'?: Array<string>;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withTaskScope(taskScope: string): ListSqlLimitTaskRequestBody {
        this['task_scope'] = taskScope;
        return this;
    }
    public set taskScope(taskScope: string  | undefined) {
        this['task_scope'] = taskScope;
    }
    public get taskScope(): string | undefined {
        return this['task_scope'];
    }
    public withLimitType(limitType: string): ListSqlLimitTaskRequestBody {
        this['limit_type'] = limitType;
        return this;
    }
    public set limitType(limitType: string  | undefined) {
        this['limit_type'] = limitType;
    }
    public get limitType(): string | undefined {
        return this['limit_type'];
    }
    public withLimitTypeValue(limitTypeValue: string): ListSqlLimitTaskRequestBody {
        this['limit_type_value'] = limitTypeValue;
        return this;
    }
    public set limitTypeValue(limitTypeValue: string  | undefined) {
        this['limit_type_value'] = limitTypeValue;
    }
    public get limitTypeValue(): string | undefined {
        return this['limit_type_value'];
    }
    public withTaskName(taskName: string): ListSqlLimitTaskRequestBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withRuleName(ruleName: string): ListSqlLimitTaskRequestBody {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withOffset(offset: number): ListSqlLimitTaskRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSqlLimitTaskRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withSqlId(sqlId: string): ListSqlLimitTaskRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ListSqlLimitTaskRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}