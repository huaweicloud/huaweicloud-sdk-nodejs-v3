

export class DeleteDatabaseRequest {
    private 'database_name'?: string;
    public async?: boolean;
    public cascade?: boolean;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withDatabaseName(databaseName: string): DeleteDatabaseRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withAsync(async: boolean): DeleteDatabaseRequest {
        this['async'] = async;
        return this;
    }
    public withCascade(cascade: boolean): DeleteDatabaseRequest {
        this['cascade'] = cascade;
        return this;
    }
}