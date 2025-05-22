

export class WorkTableIssuseListResponseBodyProject {
    public id?: number;
    public identifier?: string;
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyProject {
        this['id'] = id;
        return this;
    }
    public withIdentifier(identifier: string): WorkTableIssuseListResponseBodyProject {
        this['identifier'] = identifier;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyProject {
        this['name'] = name;
        return this;
    }
    public withType(type: string): WorkTableIssuseListResponseBodyProject {
        this['type'] = type;
        return this;
    }
}