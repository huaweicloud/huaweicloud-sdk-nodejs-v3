

export class SqlExecutionReq {
    private 'sql_type'?: string;
    private 'sql_content'?: string;
    public database?: string;
    private 'archive_path'?: string;
    public constructor(sqlType?: string, sqlContent?: string) { 
        this['sql_type'] = sqlType;
        this['sql_content'] = sqlContent;
    }
    public withSqlType(sqlType: string): SqlExecutionReq {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withSqlContent(sqlContent: string): SqlExecutionReq {
        this['sql_content'] = sqlContent;
        return this;
    }
    public set sqlContent(sqlContent: string  | undefined) {
        this['sql_content'] = sqlContent;
    }
    public get sqlContent(): string | undefined {
        return this['sql_content'];
    }
    public withDatabase(database: string): SqlExecutionReq {
        this['database'] = database;
        return this;
    }
    public withArchivePath(archivePath: string): SqlExecutionReq {
        this['archive_path'] = archivePath;
        return this;
    }
    public set archivePath(archivePath: string  | undefined) {
        this['archive_path'] = archivePath;
    }
    public get archivePath(): string | undefined {
        return this['archive_path'];
    }
}