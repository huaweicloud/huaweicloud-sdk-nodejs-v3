

export class DeleteNetworkInstanceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteNetworkInstanceRequest {
        this['id'] = id;
        return this;
    }
}