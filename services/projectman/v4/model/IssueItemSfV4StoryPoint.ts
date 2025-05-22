

export class IssueItemSfV4StoryPoint {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4StoryPoint {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4StoryPoint {
        this['name'] = name;
        return this;
    }
}