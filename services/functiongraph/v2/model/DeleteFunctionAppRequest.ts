

export class DeleteFunctionAppRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteFunctionAppRequest {
        this['id'] = id;
        return this;
    }
}