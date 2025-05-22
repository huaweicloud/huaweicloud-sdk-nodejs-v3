

export class ListTemplatesRequest {
    private 'project_id'?: string;
    private 'tracker_id'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListTemplatesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTrackerId(trackerId: string): ListTemplatesRequest {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
}