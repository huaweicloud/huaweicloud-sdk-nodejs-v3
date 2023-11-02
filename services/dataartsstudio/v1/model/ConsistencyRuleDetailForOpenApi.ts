

export class ConsistencyRuleDetailForOpenApi {
    public id?: number;
    private 'sub_rule_name'?: string;
    public type?: string;
    private 'template_id'?: number;
    public connection?: string;
    private 'connection_type'?: string;
    public databases?: string;
    public sql?: string;
    public tables?: string;
    private 'reference_tables'?: string;
    public columns?: string;
    private 'reference_columns'?: string;
    public dimension?: string;
    public queue?: string;
    private 'regular_expression'?: string;
    private 'template_arguments'?: string;
    public weight?: number;
    private 'calculation_range'?: string;
    private 'calculation_range_sql'?: string;
    private 'alarm_condition'?: string;
    public constructor() { 
    }
    public withId(id: number): ConsistencyRuleDetailForOpenApi {
        this['id'] = id;
        return this;
    }
    public withSubRuleName(subRuleName: string): ConsistencyRuleDetailForOpenApi {
        this['sub_rule_name'] = subRuleName;
        return this;
    }
    public set subRuleName(subRuleName: string  | undefined) {
        this['sub_rule_name'] = subRuleName;
    }
    public get subRuleName(): string | undefined {
        return this['sub_rule_name'];
    }
    public withType(type: string): ConsistencyRuleDetailForOpenApi {
        this['type'] = type;
        return this;
    }
    public withTemplateId(templateId: number): ConsistencyRuleDetailForOpenApi {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withConnection(connection: string): ConsistencyRuleDetailForOpenApi {
        this['connection'] = connection;
        return this;
    }
    public withConnectionType(connectionType: string): ConsistencyRuleDetailForOpenApi {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withDatabases(databases: string): ConsistencyRuleDetailForOpenApi {
        this['databases'] = databases;
        return this;
    }
    public withSql(sql: string): ConsistencyRuleDetailForOpenApi {
        this['sql'] = sql;
        return this;
    }
    public withTables(tables: string): ConsistencyRuleDetailForOpenApi {
        this['tables'] = tables;
        return this;
    }
    public withReferenceTables(referenceTables: string): ConsistencyRuleDetailForOpenApi {
        this['reference_tables'] = referenceTables;
        return this;
    }
    public set referenceTables(referenceTables: string  | undefined) {
        this['reference_tables'] = referenceTables;
    }
    public get referenceTables(): string | undefined {
        return this['reference_tables'];
    }
    public withColumns(columns: string): ConsistencyRuleDetailForOpenApi {
        this['columns'] = columns;
        return this;
    }
    public withReferenceColumns(referenceColumns: string): ConsistencyRuleDetailForOpenApi {
        this['reference_columns'] = referenceColumns;
        return this;
    }
    public set referenceColumns(referenceColumns: string  | undefined) {
        this['reference_columns'] = referenceColumns;
    }
    public get referenceColumns(): string | undefined {
        return this['reference_columns'];
    }
    public withDimension(dimension: string): ConsistencyRuleDetailForOpenApi {
        this['dimension'] = dimension;
        return this;
    }
    public withQueue(queue: string): ConsistencyRuleDetailForOpenApi {
        this['queue'] = queue;
        return this;
    }
    public withRegularExpression(regularExpression: string): ConsistencyRuleDetailForOpenApi {
        this['regular_expression'] = regularExpression;
        return this;
    }
    public set regularExpression(regularExpression: string  | undefined) {
        this['regular_expression'] = regularExpression;
    }
    public get regularExpression(): string | undefined {
        return this['regular_expression'];
    }
    public withTemplateArguments(templateArguments: string): ConsistencyRuleDetailForOpenApi {
        this['template_arguments'] = templateArguments;
        return this;
    }
    public set templateArguments(templateArguments: string  | undefined) {
        this['template_arguments'] = templateArguments;
    }
    public get templateArguments(): string | undefined {
        return this['template_arguments'];
    }
    public withWeight(weight: number): ConsistencyRuleDetailForOpenApi {
        this['weight'] = weight;
        return this;
    }
    public withCalculationRange(calculationRange: string): ConsistencyRuleDetailForOpenApi {
        this['calculation_range'] = calculationRange;
        return this;
    }
    public set calculationRange(calculationRange: string  | undefined) {
        this['calculation_range'] = calculationRange;
    }
    public get calculationRange(): string | undefined {
        return this['calculation_range'];
    }
    public withCalculationRangeSql(calculationRangeSql: string): ConsistencyRuleDetailForOpenApi {
        this['calculation_range_sql'] = calculationRangeSql;
        return this;
    }
    public set calculationRangeSql(calculationRangeSql: string  | undefined) {
        this['calculation_range_sql'] = calculationRangeSql;
    }
    public get calculationRangeSql(): string | undefined {
        return this['calculation_range_sql'];
    }
    public withAlarmCondition(alarmCondition: string): ConsistencyRuleDetailForOpenApi {
        this['alarm_condition'] = alarmCondition;
        return this;
    }
    public set alarmCondition(alarmCondition: string  | undefined) {
        this['alarm_condition'] = alarmCondition;
    }
    public get alarmCondition(): string | undefined {
        return this['alarm_condition'];
    }
}