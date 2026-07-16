

export class QueryHyperinstanceTagsRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): QueryHyperinstanceTagsRequest {
        this['id'] = id;
        return this;
    }
}