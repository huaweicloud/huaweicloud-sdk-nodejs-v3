

export class MergeRequestAssigneeListItem {
    public id?: number;
    public name?: string;
    public state?: string;
    public username?: string;
    public constructor() { 
    }
    public withId(id: number): MergeRequestAssigneeListItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MergeRequestAssigneeListItem {
        this['name'] = name;
        return this;
    }
    public withState(state: string): MergeRequestAssigneeListItem {
        this['state'] = state;
        return this;
    }
    public withUsername(username: string): MergeRequestAssigneeListItem {
        this['username'] = username;
        return this;
    }
}