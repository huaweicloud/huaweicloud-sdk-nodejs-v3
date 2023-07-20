

export class GetJobInstanceInfoDetail {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): GetJobInstanceInfoDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetJobInstanceInfoDetail {
        this['name'] = name;
        return this;
    }
}