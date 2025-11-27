

export class DeleteResourceViewsRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteResourceViewsRequest {
        this['id'] = id;
        return this;
    }
}