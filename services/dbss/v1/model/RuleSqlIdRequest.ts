

export class RuleSqlIdRequest {
    public id?: string;
    public status?: string;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): RuleSqlIdRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): RuleSqlIdRequest {
        this['status'] = status;
        return this;
    }
}