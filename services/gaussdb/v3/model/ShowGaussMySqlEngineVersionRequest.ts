

export class ShowGaussMySqlEngineVersionRequest {
    private 'X-Language'?: string;
    private 'database_name'?: string;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withXLanguage(xLanguage: string): ShowGaussMySqlEngineVersionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDatabaseName(databaseName: string): ShowGaussMySqlEngineVersionRequest {
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