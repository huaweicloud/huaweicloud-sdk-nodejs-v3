

export class ListProjectIssuesRecordsV4Request {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'operated_time_interval'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectIssuesRecordsV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListProjectIssuesRecordsV4Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectIssuesRecordsV4Request {
        this['limit'] = limit;
        return this;
    }
    public withOperatedTimeInterval(operatedTimeInterval: string): ListProjectIssuesRecordsV4Request {
        this['operated_time_interval'] = operatedTimeInterval;
        return this;
    }
    public set operatedTimeInterval(operatedTimeInterval: string  | undefined) {
        this['operated_time_interval'] = operatedTimeInterval;
    }
    public get operatedTimeInterval(): string | undefined {
        return this['operated_time_interval'];
    }
}