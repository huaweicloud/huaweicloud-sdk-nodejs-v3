

export class SqlExecutionReq {
    private 'sql_type': string | undefined;
    private 'sql_content': string | undefined;
    public database?: string;
    private 'archive_path'?: string | undefined;
    public constructor(sqlType?: any, sqlContent?: any) { 
        this['sql_type'] = sqlType;
        this['sql_content'] = sqlContent;
    }
    public withSqlType(sqlType: string): SqlExecutionReq {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType() {
        return this['sql_type'];
    }
    public withSqlContent(sqlContent: string): SqlExecutionReq {
        this['sql_content'] = sqlContent;
        return this;
    }
    public set sqlContent(sqlContent: string | undefined) {
        this['sql_content'] = sqlContent;
    }
    public get sqlContent() {
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
    public set archivePath(archivePath: string | undefined) {
        this['archive_path'] = archivePath;
    }
    public get archivePath() {
        return this['archive_path'];
    }
}