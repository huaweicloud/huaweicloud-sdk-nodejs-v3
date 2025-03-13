

export class DataClassificationCombineRuleCheckDTOCombineInputData {
    private 'column_content'?: string;
    private 'column_name'?: string;
    private 'column_comment'?: string;
    private 'table_comment'?: string;
    private 'table_name'?: string;
    private 'database_name'?: string;
    public constructor() { 
    }
    public withColumnContent(columnContent: string): DataClassificationCombineRuleCheckDTOCombineInputData {
        this['column_content'] = columnContent;
        return this;
    }
    public set columnContent(columnContent: string  | undefined) {
        this['column_content'] = columnContent;
    }
    public get columnContent(): string | undefined {
        return this['column_content'];
    }
    public withColumnName(columnName: string): DataClassificationCombineRuleCheckDTOCombineInputData {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnComment(columnComment: string): DataClassificationCombineRuleCheckDTOCombineInputData {
        this['column_comment'] = columnComment;
        return this;
    }
    public set columnComment(columnComment: string  | undefined) {
        this['column_comment'] = columnComment;
    }
    public get columnComment(): string | undefined {
        return this['column_comment'];
    }
    public withTableComment(tableComment: string): DataClassificationCombineRuleCheckDTOCombineInputData {
        this['table_comment'] = tableComment;
        return this;
    }
    public set tableComment(tableComment: string  | undefined) {
        this['table_comment'] = tableComment;
    }
    public get tableComment(): string | undefined {
        return this['table_comment'];
    }
    public withTableName(tableName: string): DataClassificationCombineRuleCheckDTOCombineInputData {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDatabaseName(databaseName: string): DataClassificationCombineRuleCheckDTOCombineInputData {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}