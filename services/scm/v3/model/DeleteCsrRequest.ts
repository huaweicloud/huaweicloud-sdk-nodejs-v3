

export class DeleteCsrRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteCsrRequest {
        this['id'] = id;
        return this;
    }
}