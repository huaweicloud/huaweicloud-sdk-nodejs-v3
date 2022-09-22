

export class ListMigprojectsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListMigprojectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListMigprojectsRequest {
        this['offset'] = offset;
        return this;
    }
}