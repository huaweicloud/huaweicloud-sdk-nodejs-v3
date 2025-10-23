

export class ListPersonalRecentPushEventsRequest {
    private 'project_id'?: string;
    public size?: number;
    public constructor() { 
    }
    public withProjectId(projectId: string): ListPersonalRecentPushEventsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSize(size: number): ListPersonalRecentPushEventsRequest {
        this['size'] = size;
        return this;
    }
}