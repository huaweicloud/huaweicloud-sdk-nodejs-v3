

export class DeleteShareCacheGroupsRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteShareCacheGroupsRequest {
        this['id'] = id;
        return this;
    }
}