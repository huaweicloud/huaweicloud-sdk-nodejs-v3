

export class DeleteDevServerRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteDevServerRequest {
        this['id'] = id;
        return this;
    }
}