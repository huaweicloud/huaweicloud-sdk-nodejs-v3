

export class SimpleIssueVo {
    public id?: string;
    public name?: string;
    public path?: string;
    private 'tracker_name'?: string;
    public constructor() { 
    }
    public withId(id: string): SimpleIssueVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SimpleIssueVo {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): SimpleIssueVo {
        this['path'] = path;
        return this;
    }
    public withTrackerName(trackerName: string): SimpleIssueVo {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
}