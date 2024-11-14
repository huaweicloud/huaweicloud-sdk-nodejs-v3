

export class DeleteDbCacheMappingRequestBody {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteDbCacheMappingRequestBody {
        this['id'] = id;
        return this;
    }
}