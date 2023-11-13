import { PostgreSQLHistoryDatabaseRequest } from './PostgreSQLHistoryDatabaseRequest';


export class ListHistoryDatabaseRequest {
    private 'database_name'?: string;
    private 'X-Language'?: string;
    public body?: PostgreSQLHistoryDatabaseRequest;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withDatabaseName(databaseName: string): ListHistoryDatabaseRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withXLanguage(xLanguage: string): ListHistoryDatabaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: PostgreSQLHistoryDatabaseRequest): ListHistoryDatabaseRequest {
        this['body'] = body;
        return this;
    }
}