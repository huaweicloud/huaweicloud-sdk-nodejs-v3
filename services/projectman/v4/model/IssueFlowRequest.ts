

export class IssueFlowRequest {
    private 'status_id'?: number;
    private 'assigned_to_id'?: string;
    public notes?: string;
    public projectUUId?: string;
    public id?: number;
    public type?: string;
    public constructor() { 
    }
    public withStatusId(statusId: number): IssueFlowRequest {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withAssignedToId(assignedToId: string): IssueFlowRequest {
        this['assigned_to_id'] = assignedToId;
        return this;
    }
    public set assignedToId(assignedToId: string  | undefined) {
        this['assigned_to_id'] = assignedToId;
    }
    public get assignedToId(): string | undefined {
        return this['assigned_to_id'];
    }
    public withNotes(notes: string): IssueFlowRequest {
        this['notes'] = notes;
        return this;
    }
    public withProjectUUId(projectUUId: string): IssueFlowRequest {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withId(id: number): IssueFlowRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: string): IssueFlowRequest {
        this['type'] = type;
        return this;
    }
}