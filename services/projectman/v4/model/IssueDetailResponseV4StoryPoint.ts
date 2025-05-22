

export class IssueDetailResponseV4StoryPoint {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV4StoryPoint {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV4StoryPoint {
        this['name'] = name;
        return this;
    }
}