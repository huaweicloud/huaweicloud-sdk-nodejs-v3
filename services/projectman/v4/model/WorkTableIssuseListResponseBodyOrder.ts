

export class WorkTableIssuseListResponseBodyOrder {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyOrder {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyOrder {
        this['name'] = name;
        return this;
    }
}