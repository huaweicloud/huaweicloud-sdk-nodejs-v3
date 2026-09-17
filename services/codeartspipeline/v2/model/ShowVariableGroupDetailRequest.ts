

export class ShowVariableGroupDetailRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowVariableGroupDetailRequest {
        this['id'] = id;
        return this;
    }
}