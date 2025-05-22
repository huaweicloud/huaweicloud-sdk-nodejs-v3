

export class ListIssuesSfV4Request {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'tracker_id'?: ListIssuesSfV4RequestTrackerIdEnum | number;
    private 'created_time_interval'?: string;
    private 'updated_time_interval'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListIssuesSfV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListIssuesSfV4Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIssuesSfV4Request {
        this['limit'] = limit;
        return this;
    }
    public withTrackerId(trackerId: ListIssuesSfV4RequestTrackerIdEnum | number): ListIssuesSfV4Request {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: ListIssuesSfV4RequestTrackerIdEnum | number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): ListIssuesSfV4RequestTrackerIdEnum | number | undefined {
        return this['tracker_id'];
    }
    public withCreatedTimeInterval(createdTimeInterval: string): ListIssuesSfV4Request {
        this['created_time_interval'] = createdTimeInterval;
        return this;
    }
    public set createdTimeInterval(createdTimeInterval: string  | undefined) {
        this['created_time_interval'] = createdTimeInterval;
    }
    public get createdTimeInterval(): string | undefined {
        return this['created_time_interval'];
    }
    public withUpdatedTimeInterval(updatedTimeInterval: string): ListIssuesSfV4Request {
        this['updated_time_interval'] = updatedTimeInterval;
        return this;
    }
    public set updatedTimeInterval(updatedTimeInterval: string  | undefined) {
        this['updated_time_interval'] = updatedTimeInterval;
    }
    public get updatedTimeInterval(): string | undefined {
        return this['updated_time_interval'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListIssuesSfV4RequestTrackerIdEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7
}
