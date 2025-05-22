

export class WorkTableIssuseListResponseBodyDomain {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyDomain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyDomain {
        this['name'] = name;
        return this;
    }
}