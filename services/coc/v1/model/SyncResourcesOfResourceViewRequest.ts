

export class SyncResourcesOfResourceViewRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SyncResourcesOfResourceViewRequest {
        this['id'] = id;
        return this;
    }
}