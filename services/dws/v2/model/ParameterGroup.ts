

export class ParameterGroup {
    public id: string;
    public name: string;
    public status: string;
    public constructor(id?: any, name?: any, status?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
    }
    public withId(id: string): ParameterGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ParameterGroup {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ParameterGroup {
        this['status'] = status;
        return this;
    }
}