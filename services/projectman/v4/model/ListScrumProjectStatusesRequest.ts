

export class ListScrumProjectStatusesRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'tracker_id'?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListScrumProjectStatusesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListScrumProjectStatusesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScrumProjectStatusesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTrackerId(trackerId: number): ListScrumProjectStatusesRequest {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
}