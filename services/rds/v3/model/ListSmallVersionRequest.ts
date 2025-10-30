

export class ListSmallVersionRequest {
    private 'database_name'?: string;
    public version?: string;
    public offset?: number;
    public limit?: number;
    public constructor(databaseName?: string, version?: string) { 
        this['database_name'] = databaseName;
        this['version'] = version;
    }
    public withDatabaseName(databaseName: string): ListSmallVersionRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withVersion(version: string): ListSmallVersionRequest {
        this['version'] = version;
        return this;
    }
    public withOffset(offset: number): ListSmallVersionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSmallVersionRequest {
        this['limit'] = limit;
        return this;
    }
}