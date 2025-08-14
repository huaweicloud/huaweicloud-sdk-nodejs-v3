

export class SensitiveDataDTO {
    public id?: number;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'column_name'?: string;
    private 'rule_id'?: string;
    private 'active_flag'?: number;
    private 'classification_id'?: string;
    private 'category_id'?: string;
    private 'sync_time'?: number;
    private 'find_time'?: number;
    private 'task_id'?: string;
    public constructor() { 
    }
    public withId(id: number): SensitiveDataDTO {
        this['id'] = id;
        return this;
    }
    public withClusterName(clusterName: string): SensitiveDataDTO {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): SensitiveDataDTO {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): SensitiveDataDTO {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): SensitiveDataDTO {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnName(columnName: string): SensitiveDataDTO {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withRuleId(ruleId: string): SensitiveDataDTO {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withActiveFlag(activeFlag: number): SensitiveDataDTO {
        this['active_flag'] = activeFlag;
        return this;
    }
    public set activeFlag(activeFlag: number  | undefined) {
        this['active_flag'] = activeFlag;
    }
    public get activeFlag(): number | undefined {
        return this['active_flag'];
    }
    public withClassificationId(classificationId: string): SensitiveDataDTO {
        this['classification_id'] = classificationId;
        return this;
    }
    public set classificationId(classificationId: string  | undefined) {
        this['classification_id'] = classificationId;
    }
    public get classificationId(): string | undefined {
        return this['classification_id'];
    }
    public withCategoryId(categoryId: string): SensitiveDataDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withSyncTime(syncTime: number): SensitiveDataDTO {
        this['sync_time'] = syncTime;
        return this;
    }
    public set syncTime(syncTime: number  | undefined) {
        this['sync_time'] = syncTime;
    }
    public get syncTime(): number | undefined {
        return this['sync_time'];
    }
    public withFindTime(findTime: number): SensitiveDataDTO {
        this['find_time'] = findTime;
        return this;
    }
    public set findTime(findTime: number  | undefined) {
        this['find_time'] = findTime;
    }
    public get findTime(): number | undefined {
        return this['find_time'];
    }
    public withTaskId(taskId: string): SensitiveDataDTO {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}