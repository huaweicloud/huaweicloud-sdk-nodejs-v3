

export class ListWorkTableIssueRequestV4RequestBody {
    public offset?: number;
    public limit?: number;
    public subject?: string;
    private 'created_on'?: string;
    private 'updated_on'?: string;
    private 'closed_on'?: string;
    private 'start_date'?: string;
    private 'due_date'?: string;
    private 'tracker_id'?: string;
    private 'status_id'?: string;
    private 'author_id'?: string;
    private 'developer_id'?: string;
    private 'priority_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListWorkTableIssueRequestV4RequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkTableIssueRequestV4RequestBody {
        this['limit'] = limit;
        return this;
    }
    public withSubject(subject: string): ListWorkTableIssueRequestV4RequestBody {
        this['subject'] = subject;
        return this;
    }
    public withCreatedOn(createdOn: string): ListWorkTableIssueRequestV4RequestBody {
        this['created_on'] = createdOn;
        return this;
    }
    public set createdOn(createdOn: string  | undefined) {
        this['created_on'] = createdOn;
    }
    public get createdOn(): string | undefined {
        return this['created_on'];
    }
    public withUpdatedOn(updatedOn: string): ListWorkTableIssueRequestV4RequestBody {
        this['updated_on'] = updatedOn;
        return this;
    }
    public set updatedOn(updatedOn: string  | undefined) {
        this['updated_on'] = updatedOn;
    }
    public get updatedOn(): string | undefined {
        return this['updated_on'];
    }
    public withClosedOn(closedOn: string): ListWorkTableIssueRequestV4RequestBody {
        this['closed_on'] = closedOn;
        return this;
    }
    public set closedOn(closedOn: string  | undefined) {
        this['closed_on'] = closedOn;
    }
    public get closedOn(): string | undefined {
        return this['closed_on'];
    }
    public withStartDate(startDate: string): ListWorkTableIssueRequestV4RequestBody {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withDueDate(dueDate: string): ListWorkTableIssueRequestV4RequestBody {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withTrackerId(trackerId: string): ListWorkTableIssueRequestV4RequestBody {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
    public withStatusId(statusId: string): ListWorkTableIssueRequestV4RequestBody {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withAuthorId(authorId: string): ListWorkTableIssueRequestV4RequestBody {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withDeveloperId(developerId: string): ListWorkTableIssueRequestV4RequestBody {
        this['developer_id'] = developerId;
        return this;
    }
    public set developerId(developerId: string  | undefined) {
        this['developer_id'] = developerId;
    }
    public get developerId(): string | undefined {
        return this['developer_id'];
    }
    public withPriorityId(priorityId: string): ListWorkTableIssueRequestV4RequestBody {
        this['priority_id'] = priorityId;
        return this;
    }
    public set priorityId(priorityId: string  | undefined) {
        this['priority_id'] = priorityId;
    }
    public get priorityId(): string | undefined {
        return this['priority_id'];
    }
}