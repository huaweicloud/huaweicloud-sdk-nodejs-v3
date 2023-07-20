

export class GetTaskDetailListRspJobsInstance {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): GetTaskDetailListRspJobsInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetTaskDetailListRspJobsInstance {
        this['name'] = name;
        return this;
    }
}