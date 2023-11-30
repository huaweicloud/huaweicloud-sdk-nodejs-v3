import { PostgreSQLHistoryDatabaseRequest } from './PostgreSQLHistoryDatabaseRequest';


export class ListHistoryDatabaseRequest {
    public engine?: string;
    private 'X-Language'?: string;
    public body?: PostgreSQLHistoryDatabaseRequest;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: string): ListHistoryDatabaseRequest {
        this['engine'] = engine;
        return this;
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