

export class AlarmWhiteListResponseInfo {
    private 'enterprise_project_name'?: string;
    public hash?: string;
    public description?: string;
    private 'event_type'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): AlarmWhiteListResponseInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withHash(hash: string): AlarmWhiteListResponseInfo {
        this['hash'] = hash;
        return this;
    }
    public withDescription(description: string): AlarmWhiteListResponseInfo {
        this['description'] = description;
        return this;
    }
    public withEventType(eventType: number): AlarmWhiteListResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withUpdateTime(updateTime: number): AlarmWhiteListResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}