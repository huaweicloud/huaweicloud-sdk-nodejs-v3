

export class DeleteCloudConnectionRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteCloudConnectionRequest {
        this['id'] = id;
        return this;
    }
}