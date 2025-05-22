

export class IssueCustomField {
    public name?: string;
    private 'custom_field'?: string;
    public options?: string;
    public type?: string;
    private 'tracker_ids'?: Array<number>;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withName(name: string): IssueCustomField {
        this['name'] = name;
        return this;
    }
    public withCustomField(customField: string): IssueCustomField {
        this['custom_field'] = customField;
        return this;
    }
    public set customField(customField: string  | undefined) {
        this['custom_field'] = customField;
    }
    public get customField(): string | undefined {
        return this['custom_field'];
    }
    public withOptions(options: string): IssueCustomField {
        this['options'] = options;
        return this;
    }
    public withType(type: string): IssueCustomField {
        this['type'] = type;
        return this;
    }
    public withTrackerIds(trackerIds: Array<number>): IssueCustomField {
        this['tracker_ids'] = trackerIds;
        return this;
    }
    public set trackerIds(trackerIds: Array<number>  | undefined) {
        this['tracker_ids'] = trackerIds;
    }
    public get trackerIds(): Array<number> | undefined {
        return this['tracker_ids'];
    }
    public withCreateTime(createTime: string): IssueCustomField {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}