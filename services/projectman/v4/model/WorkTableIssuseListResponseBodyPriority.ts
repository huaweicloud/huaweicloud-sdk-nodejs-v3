

export class WorkTableIssuseListResponseBodyPriority {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyPriority {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyPriority {
        this['name'] = name;
        return this;
    }
}