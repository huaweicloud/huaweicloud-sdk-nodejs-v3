

export class IssueDetailResponseV2StoryPoint {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2StoryPoint {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2StoryPoint {
        this['name'] = name;
        return this;
    }
}