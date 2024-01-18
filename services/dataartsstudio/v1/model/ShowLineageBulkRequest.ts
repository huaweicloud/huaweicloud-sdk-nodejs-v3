

export class ShowLineageBulkRequest {
    public instance?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ShowLineageBulkRequest {
        this['instance'] = instance;
        return this;
    }
    public withOffset(offset: number): ShowLineageBulkRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowLineageBulkRequest {
        this['limit'] = limit;
        return this;
    }
}