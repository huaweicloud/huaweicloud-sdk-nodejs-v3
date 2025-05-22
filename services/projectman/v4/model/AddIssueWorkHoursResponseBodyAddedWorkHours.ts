

export class AddIssueWorkHoursResponseBodyAddedWorkHours {
    private 'work_hours_id'?: string;
    private 'issue_id'?: number;
    private 'user_name'?: string;
    private 'user_nick_name'?: string;
    private 'work_date'?: string;
    private 'work_hours'?: string;
    private 'work_hours_type_name'?: string;
    public constructor() { 
    }
    public withWorkHoursId(workHoursId: string): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['work_hours_id'] = workHoursId;
        return this;
    }
    public set workHoursId(workHoursId: string  | undefined) {
        this['work_hours_id'] = workHoursId;
    }
    public get workHoursId(): string | undefined {
        return this['work_hours_id'];
    }
    public withIssueId(issueId: number): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withUserName(userName: string): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNickName(userNickName: string): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['user_nick_name'] = userNickName;
        return this;
    }
    public set userNickName(userNickName: string  | undefined) {
        this['user_nick_name'] = userNickName;
    }
    public get userNickName(): string | undefined {
        return this['user_nick_name'];
    }
    public withWorkDate(workDate: string): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['work_date'] = workDate;
        return this;
    }
    public set workDate(workDate: string  | undefined) {
        this['work_date'] = workDate;
    }
    public get workDate(): string | undefined {
        return this['work_date'];
    }
    public withWorkHours(workHours: string): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['work_hours'] = workHours;
        return this;
    }
    public set workHours(workHours: string  | undefined) {
        this['work_hours'] = workHours;
    }
    public get workHours(): string | undefined {
        return this['work_hours'];
    }
    public withWorkHoursTypeName(workHoursTypeName: string): AddIssueWorkHoursResponseBodyAddedWorkHours {
        this['work_hours_type_name'] = workHoursTypeName;
        return this;
    }
    public set workHoursTypeName(workHoursTypeName: string  | undefined) {
        this['work_hours_type_name'] = workHoursTypeName;
    }
    public get workHoursTypeName(): string | undefined {
        return this['work_hours_type_name'];
    }
}