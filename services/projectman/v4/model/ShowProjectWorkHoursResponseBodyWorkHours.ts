

export class ShowProjectWorkHoursResponseBodyWorkHours {
    private 'project_name'?: string;
    private 'nick_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'work_date'?: string;
    private 'work_hours_num'?: string;
    public summary?: string;
    private 'work_hours_type_name'?: string;
    private 'issue_id'?: number;
    private 'issue_type'?: string;
    public subject?: string;
    private 'created_time'?: string;
    private 'closed_time'?: string;
    private 'work_hours_created_time'?: string;
    private 'work_hours_updated_time'?: string;
    public constructor() { 
    }
    public withProjectName(projectName: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withNickName(nickName: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withUserId(userId: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withWorkDate(workDate: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['work_date'] = workDate;
        return this;
    }
    public set workDate(workDate: string  | undefined) {
        this['work_date'] = workDate;
    }
    public get workDate(): string | undefined {
        return this['work_date'];
    }
    public withWorkHoursNum(workHoursNum: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['work_hours_num'] = workHoursNum;
        return this;
    }
    public set workHoursNum(workHoursNum: string  | undefined) {
        this['work_hours_num'] = workHoursNum;
    }
    public get workHoursNum(): string | undefined {
        return this['work_hours_num'];
    }
    public withSummary(summary: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['summary'] = summary;
        return this;
    }
    public withWorkHoursTypeName(workHoursTypeName: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['work_hours_type_name'] = workHoursTypeName;
        return this;
    }
    public set workHoursTypeName(workHoursTypeName: string  | undefined) {
        this['work_hours_type_name'] = workHoursTypeName;
    }
    public get workHoursTypeName(): string | undefined {
        return this['work_hours_type_name'];
    }
    public withIssueId(issueId: number): ShowProjectWorkHoursResponseBodyWorkHours {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withIssueType(issueType: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['issue_type'] = issueType;
        return this;
    }
    public set issueType(issueType: string  | undefined) {
        this['issue_type'] = issueType;
    }
    public get issueType(): string | undefined {
        return this['issue_type'];
    }
    public withSubject(subject: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['subject'] = subject;
        return this;
    }
    public withCreatedTime(createdTime: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withClosedTime(closedTime: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withWorkHoursCreatedTime(workHoursCreatedTime: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['work_hours_created_time'] = workHoursCreatedTime;
        return this;
    }
    public set workHoursCreatedTime(workHoursCreatedTime: string  | undefined) {
        this['work_hours_created_time'] = workHoursCreatedTime;
    }
    public get workHoursCreatedTime(): string | undefined {
        return this['work_hours_created_time'];
    }
    public withWorkHoursUpdatedTime(workHoursUpdatedTime: string): ShowProjectWorkHoursResponseBodyWorkHours {
        this['work_hours_updated_time'] = workHoursUpdatedTime;
        return this;
    }
    public set workHoursUpdatedTime(workHoursUpdatedTime: string  | undefined) {
        this['work_hours_updated_time'] = workHoursUpdatedTime;
    }
    public get workHoursUpdatedTime(): string | undefined {
        return this['work_hours_updated_time'];
    }
}