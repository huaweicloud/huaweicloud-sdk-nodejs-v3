

export class BatchDeletesResponseResultDeleteIssueDelIssue {
    public id?: number;
    private 'tracker_id'?: number;
    public subject?: string;
    private 'status_id'?: number;
    private 'done_ratio'?: number;
    private 'expected_work_hours'?: number;
    private 'actual_work_hours'?: number;
    public deleted?: boolean;
    private 'is_archived'?: boolean;
    public constructor() { 
    }
    public withId(id: number): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['id'] = id;
        return this;
    }
    public withTrackerId(trackerId: number): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
    public withSubject(subject: string): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['subject'] = subject;
        return this;
    }
    public withStatusId(statusId: number): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withDoneRatio(doneRatio: number): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withActualWorkHours(actualWorkHours: number): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withDeleted(deleted: boolean): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['deleted'] = deleted;
        return this;
    }
    public withIsArchived(isArchived: boolean): BatchDeletesResponseResultDeleteIssueDelIssue {
        this['is_archived'] = isArchived;
        return this;
    }
    public set isArchived(isArchived: boolean  | undefined) {
        this['is_archived'] = isArchived;
    }
    public get isArchived(): boolean | undefined {
        return this['is_archived'];
    }
}