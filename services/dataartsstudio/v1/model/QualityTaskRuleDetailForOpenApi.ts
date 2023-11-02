

export class QualityTaskRuleDetailForOpenApi {
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
    private 'ignore_error'?: boolean;
    public dimension?: string;
    public queue?: string;
    private 'regular_expression'?: string;
    private 'template_arguments'?: string;
    public weight?: number;
    private 'calculation_range'?: string;
    private 'calculation_range_sql'?: string;
    private 'alarm_condition'?: string;
    private 'export_abnormal_table'?: boolean;
    private 'abnormal_table_database'?: string;
    private 'abnormal_table_schema'?: string;
    private 'abnormal_table'?: string;
    private 'abnormal_table_prefix'?: string;
    private 'abnormal_table_suffix'?: string;
    private 'abnormal_table_columns'?: string;
    private 'abnormal_table_sql'?: string;
    private 'abnormal_table_out_config'?: boolean;
    private 'abnormal_table_include_null_value'?: boolean;
    private 'abnormal_table_out_data_number'?: number;
    private 'score_switch'?: boolean;
    private 'score_schema'?: string;
    private 'score_table'?: string;
    private 'score_expression'?: string;
    public constructor() { 
    }
    public withId(id: number): QualityTaskRuleDetailForOpenApi {
        this['id'] = id;
        return this;
    }
    public withSubRuleName(subRuleName: string): QualityTaskRuleDetailForOpenApi {
        this['sub_rule_name'] = subRuleName;
        return this;
    }
    public set subRuleName(subRuleName: string  | undefined) {
        this['sub_rule_name'] = subRuleName;
    }
    public get subRuleName(): string | undefined {
        return this['sub_rule_name'];
    }
    public withType(type: string): QualityTaskRuleDetailForOpenApi {
        this['type'] = type;
        return this;
    }
    public withTemplateId(templateId: number): QualityTaskRuleDetailForOpenApi {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withConnection(connection: string): QualityTaskRuleDetailForOpenApi {
        this['connection'] = connection;
        return this;
    }
    public withConnectionType(connectionType: string): QualityTaskRuleDetailForOpenApi {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withDatabases(databases: string): QualityTaskRuleDetailForOpenApi {
        this['databases'] = databases;
        return this;
    }
    public withSql(sql: string): QualityTaskRuleDetailForOpenApi {
        this['sql'] = sql;
        return this;
    }
    public withTables(tables: string): QualityTaskRuleDetailForOpenApi {
        this['tables'] = tables;
        return this;
    }
    public withReferenceTables(referenceTables: string): QualityTaskRuleDetailForOpenApi {
        this['reference_tables'] = referenceTables;
        return this;
    }
    public set referenceTables(referenceTables: string  | undefined) {
        this['reference_tables'] = referenceTables;
    }
    public get referenceTables(): string | undefined {
        return this['reference_tables'];
    }
    public withColumns(columns: string): QualityTaskRuleDetailForOpenApi {
        this['columns'] = columns;
        return this;
    }
    public withReferenceColumns(referenceColumns: string): QualityTaskRuleDetailForOpenApi {
        this['reference_columns'] = referenceColumns;
        return this;
    }
    public set referenceColumns(referenceColumns: string  | undefined) {
        this['reference_columns'] = referenceColumns;
    }
    public get referenceColumns(): string | undefined {
        return this['reference_columns'];
    }
    public withIgnoreError(ignoreError: boolean): QualityTaskRuleDetailForOpenApi {
        this['ignore_error'] = ignoreError;
        return this;
    }
    public set ignoreError(ignoreError: boolean  | undefined) {
        this['ignore_error'] = ignoreError;
    }
    public get ignoreError(): boolean | undefined {
        return this['ignore_error'];
    }
    public withDimension(dimension: string): QualityTaskRuleDetailForOpenApi {
        this['dimension'] = dimension;
        return this;
    }
    public withQueue(queue: string): QualityTaskRuleDetailForOpenApi {
        this['queue'] = queue;
        return this;
    }
    public withRegularExpression(regularExpression: string): QualityTaskRuleDetailForOpenApi {
        this['regular_expression'] = regularExpression;
        return this;
    }
    public set regularExpression(regularExpression: string  | undefined) {
        this['regular_expression'] = regularExpression;
    }
    public get regularExpression(): string | undefined {
        return this['regular_expression'];
    }
    public withTemplateArguments(templateArguments: string): QualityTaskRuleDetailForOpenApi {
        this['template_arguments'] = templateArguments;
        return this;
    }
    public set templateArguments(templateArguments: string  | undefined) {
        this['template_arguments'] = templateArguments;
    }
    public get templateArguments(): string | undefined {
        return this['template_arguments'];
    }
    public withWeight(weight: number): QualityTaskRuleDetailForOpenApi {
        this['weight'] = weight;
        return this;
    }
    public withCalculationRange(calculationRange: string): QualityTaskRuleDetailForOpenApi {
        this['calculation_range'] = calculationRange;
        return this;
    }
    public set calculationRange(calculationRange: string  | undefined) {
        this['calculation_range'] = calculationRange;
    }
    public get calculationRange(): string | undefined {
        return this['calculation_range'];
    }
    public withCalculationRangeSql(calculationRangeSql: string): QualityTaskRuleDetailForOpenApi {
        this['calculation_range_sql'] = calculationRangeSql;
        return this;
    }
    public set calculationRangeSql(calculationRangeSql: string  | undefined) {
        this['calculation_range_sql'] = calculationRangeSql;
    }
    public get calculationRangeSql(): string | undefined {
        return this['calculation_range_sql'];
    }
    public withAlarmCondition(alarmCondition: string): QualityTaskRuleDetailForOpenApi {
        this['alarm_condition'] = alarmCondition;
        return this;
    }
    public set alarmCondition(alarmCondition: string  | undefined) {
        this['alarm_condition'] = alarmCondition;
    }
    public get alarmCondition(): string | undefined {
        return this['alarm_condition'];
    }
    public withExportAbnormalTable(exportAbnormalTable: boolean): QualityTaskRuleDetailForOpenApi {
        this['export_abnormal_table'] = exportAbnormalTable;
        return this;
    }
    public set exportAbnormalTable(exportAbnormalTable: boolean  | undefined) {
        this['export_abnormal_table'] = exportAbnormalTable;
    }
    public get exportAbnormalTable(): boolean | undefined {
        return this['export_abnormal_table'];
    }
    public withAbnormalTableDatabase(abnormalTableDatabase: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_database'] = abnormalTableDatabase;
        return this;
    }
    public set abnormalTableDatabase(abnormalTableDatabase: string  | undefined) {
        this['abnormal_table_database'] = abnormalTableDatabase;
    }
    public get abnormalTableDatabase(): string | undefined {
        return this['abnormal_table_database'];
    }
    public withAbnormalTableSchema(abnormalTableSchema: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_schema'] = abnormalTableSchema;
        return this;
    }
    public set abnormalTableSchema(abnormalTableSchema: string  | undefined) {
        this['abnormal_table_schema'] = abnormalTableSchema;
    }
    public get abnormalTableSchema(): string | undefined {
        return this['abnormal_table_schema'];
    }
    public withAbnormalTable(abnormalTable: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table'] = abnormalTable;
        return this;
    }
    public set abnormalTable(abnormalTable: string  | undefined) {
        this['abnormal_table'] = abnormalTable;
    }
    public get abnormalTable(): string | undefined {
        return this['abnormal_table'];
    }
    public withAbnormalTablePrefix(abnormalTablePrefix: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_prefix'] = abnormalTablePrefix;
        return this;
    }
    public set abnormalTablePrefix(abnormalTablePrefix: string  | undefined) {
        this['abnormal_table_prefix'] = abnormalTablePrefix;
    }
    public get abnormalTablePrefix(): string | undefined {
        return this['abnormal_table_prefix'];
    }
    public withAbnormalTableSuffix(abnormalTableSuffix: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_suffix'] = abnormalTableSuffix;
        return this;
    }
    public set abnormalTableSuffix(abnormalTableSuffix: string  | undefined) {
        this['abnormal_table_suffix'] = abnormalTableSuffix;
    }
    public get abnormalTableSuffix(): string | undefined {
        return this['abnormal_table_suffix'];
    }
    public withAbnormalTableColumns(abnormalTableColumns: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_columns'] = abnormalTableColumns;
        return this;
    }
    public set abnormalTableColumns(abnormalTableColumns: string  | undefined) {
        this['abnormal_table_columns'] = abnormalTableColumns;
    }
    public get abnormalTableColumns(): string | undefined {
        return this['abnormal_table_columns'];
    }
    public withAbnormalTableSql(abnormalTableSql: string): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_sql'] = abnormalTableSql;
        return this;
    }
    public set abnormalTableSql(abnormalTableSql: string  | undefined) {
        this['abnormal_table_sql'] = abnormalTableSql;
    }
    public get abnormalTableSql(): string | undefined {
        return this['abnormal_table_sql'];
    }
    public withAbnormalTableOutConfig(abnormalTableOutConfig: boolean): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_out_config'] = abnormalTableOutConfig;
        return this;
    }
    public set abnormalTableOutConfig(abnormalTableOutConfig: boolean  | undefined) {
        this['abnormal_table_out_config'] = abnormalTableOutConfig;
    }
    public get abnormalTableOutConfig(): boolean | undefined {
        return this['abnormal_table_out_config'];
    }
    public withAbnormalTableIncludeNullValue(abnormalTableIncludeNullValue: boolean): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_include_null_value'] = abnormalTableIncludeNullValue;
        return this;
    }
    public set abnormalTableIncludeNullValue(abnormalTableIncludeNullValue: boolean  | undefined) {
        this['abnormal_table_include_null_value'] = abnormalTableIncludeNullValue;
    }
    public get abnormalTableIncludeNullValue(): boolean | undefined {
        return this['abnormal_table_include_null_value'];
    }
    public withAbnormalTableOutDataNumber(abnormalTableOutDataNumber: number): QualityTaskRuleDetailForOpenApi {
        this['abnormal_table_out_data_number'] = abnormalTableOutDataNumber;
        return this;
    }
    public set abnormalTableOutDataNumber(abnormalTableOutDataNumber: number  | undefined) {
        this['abnormal_table_out_data_number'] = abnormalTableOutDataNumber;
    }
    public get abnormalTableOutDataNumber(): number | undefined {
        return this['abnormal_table_out_data_number'];
    }
    public withScoreSwitch(scoreSwitch: boolean): QualityTaskRuleDetailForOpenApi {
        this['score_switch'] = scoreSwitch;
        return this;
    }
    public set scoreSwitch(scoreSwitch: boolean  | undefined) {
        this['score_switch'] = scoreSwitch;
    }
    public get scoreSwitch(): boolean | undefined {
        return this['score_switch'];
    }
    public withScoreSchema(scoreSchema: string): QualityTaskRuleDetailForOpenApi {
        this['score_schema'] = scoreSchema;
        return this;
    }
    public set scoreSchema(scoreSchema: string  | undefined) {
        this['score_schema'] = scoreSchema;
    }
    public get scoreSchema(): string | undefined {
        return this['score_schema'];
    }
    public withScoreTable(scoreTable: string): QualityTaskRuleDetailForOpenApi {
        this['score_table'] = scoreTable;
        return this;
    }
    public set scoreTable(scoreTable: string  | undefined) {
        this['score_table'] = scoreTable;
    }
    public get scoreTable(): string | undefined {
        return this['score_table'];
    }
    public withScoreExpression(scoreExpression: string): QualityTaskRuleDetailForOpenApi {
        this['score_expression'] = scoreExpression;
        return this;
    }
    public set scoreExpression(scoreExpression: string  | undefined) {
        this['score_expression'] = scoreExpression;
    }
    public get scoreExpression(): string | undefined {
        return this['score_expression'];
    }
}