

export class DbObjectInfo {
    private 'source_db_name'?: string;
    private 'source_schema_name'?: string;
    private 'source_table_name'?: string;
    private 'target_db_name'?: string;
    private 'target_schema_name'?: string;
    private 'target_table_name'?: string;
    private 'has_column_info'?: boolean;
    public constructor() { 
    }
    public withSourceDbName(sourceDbName: string): DbObjectInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withSourceSchemaName(sourceSchemaName: string): DbObjectInfo {
        this['source_schema_name'] = sourceSchemaName;
        return this;
    }
    public set sourceSchemaName(sourceSchemaName: string  | undefined) {
        this['source_schema_name'] = sourceSchemaName;
    }
    public get sourceSchemaName(): string | undefined {
        return this['source_schema_name'];
    }
    public withSourceTableName(sourceTableName: string): DbObjectInfo {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withTargetDbName(targetDbName: string): DbObjectInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withTargetSchemaName(targetSchemaName: string): DbObjectInfo {
        this['target_schema_name'] = targetSchemaName;
        return this;
    }
    public set targetSchemaName(targetSchemaName: string  | undefined) {
        this['target_schema_name'] = targetSchemaName;
    }
    public get targetSchemaName(): string | undefined {
        return this['target_schema_name'];
    }
    public withTargetTableName(targetTableName: string): DbObjectInfo {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withHasColumnInfo(hasColumnInfo: boolean): DbObjectInfo {
        this['has_column_info'] = hasColumnInfo;
        return this;
    }
    public set hasColumnInfo(hasColumnInfo: boolean  | undefined) {
        this['has_column_info'] = hasColumnInfo;
    }
    public get hasColumnInfo(): boolean | undefined {
        return this['has_column_info'];
    }
}