

export class DeleteApplicationRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteApplicationRequest {
        this['id'] = id;
        return this;
    }
}