

export class WorkTableIssuseListResponseBodySeverity {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodySeverity {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodySeverity {
        this['name'] = name;
        return this;
    }
}