

export class AuditSqlResponseSqlOperatedObjInfo {
    private 'column_name'?: string;
    private 'object_type'?: string;
    private 'schema_name'?: string;
    private 'sql_type'?: string;
    private 'sys_name'?: string;
    private 'table_name'?: string;
    public constructor() { 
    }
    public withColumnName(columnName: string): AuditSqlResponseSqlOperatedObjInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withObjectType(objectType: string): AuditSqlResponseSqlOperatedObjInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withSchemaName(schemaName: string): AuditSqlResponseSqlOperatedObjInfo {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withSqlType(sqlType: string): AuditSqlResponseSqlOperatedObjInfo {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withSysName(sysName: string): AuditSqlResponseSqlOperatedObjInfo {
        this['sys_name'] = sysName;
        return this;
    }
    public set sysName(sysName: string  | undefined) {
        this['sys_name'] = sysName;
    }
    public get sysName(): string | undefined {
        return this['sys_name'];
    }
    public withTableName(tableName: string): AuditSqlResponseSqlOperatedObjInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}