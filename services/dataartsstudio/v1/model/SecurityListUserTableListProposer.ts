

export class SecurityListUserTableListProposer {
    public id?: string;
    public name?: string;
    public type?: number;
    public constructor(id?: string, type?: number) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): SecurityListUserTableListProposer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SecurityListUserTableListProposer {
        this['name'] = name;
        return this;
    }
    public withType(type: number): SecurityListUserTableListProposer {
        this['type'] = type;
        return this;
    }
}