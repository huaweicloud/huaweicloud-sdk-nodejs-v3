import { BatchCreateSnapshotRequest } from './BatchCreateSnapshotRequest';


export class BatchCreateIssueSnapitemsRequest {
    private 'project_id'?: string;
    public body?: BatchCreateSnapshotRequest;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchCreateIssueSnapitemsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchCreateSnapshotRequest): BatchCreateIssueSnapitemsRequest {
        this['body'] = body;
        return this;
    }
}