

export class ShowIssuesWrokFlowConfigRequest {
    private 'project_id'?: string;
    private 'tracker_id'?: number;
    public constructor(projectId?: string, trackerId?: number) { 
        this['project_id'] = projectId;
        this['tracker_id'] = trackerId;
    }
    public withProjectId(projectId: string): ShowIssuesWrokFlowConfigRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTrackerId(trackerId: number): ShowIssuesWrokFlowConfigRequest {
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