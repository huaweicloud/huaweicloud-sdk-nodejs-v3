

export class DeleteVariableGroupRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteVariableGroupRequest {
        this['id'] = id;
        return this;
    }
}