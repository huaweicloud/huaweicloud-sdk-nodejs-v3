

export class WorkTableIssuseListResponseBodyTracker {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyTracker {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyTracker {
        this['name'] = name;
        return this;
    }
}