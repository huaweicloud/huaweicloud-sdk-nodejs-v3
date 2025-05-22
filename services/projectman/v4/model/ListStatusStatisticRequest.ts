

export class ListStatusStatisticRequest {
    private 'project_id'?: string;
    private 'iteration_id'?: number;
    private 'tracker_id'?: number;
    private 'status_id'?: number;
    public constructor(projectId?: string, iterationId?: number, trackerId?: number, statusId?: number) { 
        this['project_id'] = projectId;
        this['iteration_id'] = iterationId;
        this['tracker_id'] = trackerId;
        this['status_id'] = statusId;
    }
    public withProjectId(projectId: string): ListStatusStatisticRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIterationId(iterationId: number): ListStatusStatisticRequest {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withTrackerId(trackerId: number): ListStatusStatisticRequest {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
    public withStatusId(statusId: number): ListStatusStatisticRequest {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
}