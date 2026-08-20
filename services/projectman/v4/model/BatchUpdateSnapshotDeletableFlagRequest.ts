import { BatchUpdateSnapshotDeletableVO } from './BatchUpdateSnapshotDeletableVO';


export class BatchUpdateSnapshotDeletableFlagRequest {
    private 'project_id'?: string;
    public body?: BatchUpdateSnapshotDeletableVO;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchUpdateSnapshotDeletableFlagRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchUpdateSnapshotDeletableVO): BatchUpdateSnapshotDeletableFlagRequest {
        this['body'] = body;
        return this;
    }
}