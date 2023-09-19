

export class DeleteAuthorisationRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteAuthorisationRequest {
        this['id'] = id;
        return this;
    }
}