

export class DeleteJobRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteJobRequest {
        this['id'] = id;
        return this;
    }
}