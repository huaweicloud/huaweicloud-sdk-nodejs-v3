

export class DeleteApplicationComponentRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteApplicationComponentRequest {
        this['id'] = id;
        return this;
    }
}