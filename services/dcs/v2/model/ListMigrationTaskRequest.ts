

export class ListMigrationTaskRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListMigrationTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMigrationTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListMigrationTaskRequest {
        this['name'] = name;
        return this;
    }
}