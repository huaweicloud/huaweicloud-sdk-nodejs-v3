

export class WorkTableIssuseListResponseBodyStatus {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyStatus {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyStatus {
        this['name'] = name;
        return this;
    }
}