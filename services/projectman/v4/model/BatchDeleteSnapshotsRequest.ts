import { BatchDeleteSnapshotRecordVO } from './BatchDeleteSnapshotRecordVO';


export class BatchDeleteSnapshotsRequest {
    private 'project_id'?: string;
    public body?: BatchDeleteSnapshotRecordVO;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteSnapshotsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteSnapshotRecordVO): BatchDeleteSnapshotsRequest {
        this['body'] = body;
        return this;
    }
}